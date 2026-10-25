import os
import cv2
import numpy as np
import mediapipe as mp

user_img_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../WhatsApp Image 2026-10-12 at 5.06.39 PM.jpeg'))
proj_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))

img = cv2.imread(user_img_path)
if img is None:
    raise FileNotFoundError(f"Could not load image from {user_img_path}")

h, w = img.shape[:2]
print(f"Loaded image: {w}x{h}")

# MediaPipe selfie segmentation
mp_selfie_segmentation = mp.solutions.selfie_segmentation
with mp_selfie_segmentation.SelfieSegmentation(model_selection=1) as selfie_segmentation:
    rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    results = selfie_segmentation.process(rgb)
    mask = results.segmentation_mask

# Soft thresholding
# Person is foreground, background smoothly removed
soft_mask = np.clip((mask - 0.2) / (0.7 - 0.2), 0, 1)

# Feather bottom so the table fades smoothly towards the bottom edge
fade_start = int(h * 0.88)
for y in range(fade_start, h):
    factor = 1.0 - (y - fade_start) / (h - fade_start)
    soft_mask[y, :] *= factor

# Smooth mask edge
blurred_mask = cv2.GaussianBlur(soft_mask, (5, 5), 0)
alpha_channel = (blurred_mask * 255).astype(np.uint8)

# Combine BGR and Alpha
bgra = np.dstack([img, alpha_channel])

# Save pic1.jpeg (original high-res) and pic.png (cutout) in the project root
pic1_path = os.path.join(proj_dir, "pic1.jpeg")
pic_path = os.path.join(proj_dir, "pic.png")

cv2.imwrite(pic1_path, img, [cv2.IMWRITE_JPEG_QUALITY, 95])
cv2.imwrite(pic_path, bgra)

print(f"Saved {pic1_path} and {pic_path} successfully!")
