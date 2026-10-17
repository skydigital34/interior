from PIL import Image
import os

img = Image.open("public/assets/services/services-grid-master.jpg")
W, H = img.size
print(f"Master image size: {W}x{H}")

# Looking closely at the image:
# Column 1: x = 16 to 248 (width 232)
# Column 2: x = 269 to 501 (width 232)
# Column 3: x = 521 to 753 (width 232)
# Column 4: x = 774 to 1006 (width 232)

# Row 1: y = 92 to 330 (height 238)
# Row 2: y = 345 to 583 (height 238)
# Row 3: y = 598 to 836 (height 238)

cols = [
    (17, 249),
    (269, 501),
    (522, 754),
    (774, 1006)
]

rows = [
    (92, 330),
    (345, 583),
    (598, 836)
]

rooms = [
    [
        ("living-room", "Living Room", "Luxury modular seating, acoustic wood slats & sculptural cove illumination"),
        ("bedroom", "Bedroom", "Serene ambient retreat with upholstered headboard & integrated reading lights"),
        ("modular-kitchen", "Modular Kitchen", "Sage green cabinetry, breakfast bar island & engineered quartz surfaces"),
        ("dining-area", "Dining Area", "Sculptural round dining table, fluted feature wall & brass globe cluster")
    ],
    [
        ("bathroom", "Bathroom", "Frameless glass walk-in rain shower, backlit circular mirror & floating vanity"),
        ("kids-room", "Kids Room", "Playful architectural bunk bed, integrated oak steps & ergonomic study nook"),
        ("home-office", "Home Office", "Executive walnut work desk, fluted acoustic paneling & floating display shelves"),
        ("balcony", "Balcony", "Lush vertical biophilic green wall, all-weather cane seating & garden vistas")
    ],
    [
        ("false-ceiling", "False Ceiling", "Layered geometric gypsum tray ceilings with dimmable perimeter warm LED coves"),
        ("wardrobe", "Wardrobe", "Floor-to-ceiling tinted glass walk-in wardrobe with automated interior lighting"),
        ("wall-decor", "Wall Decor", "Custom fluted wood backdrop, floating console & museum-grade art spotlighting"),
        ("space-planning", "Space Planning", "Seamless open-plan zoning optimizing natural light, airflow & luxury circulation")
    ]
]

os.makedirs("public/assets/services/rooms", exist_ok=True)

for r_idx, r in enumerate(rows):
    for c_idx, c in enumerate(cols):
        slug, title, desc = rooms[r_idx][c_idx]
        cropped = img.crop((c[0], r[0], c[1], r[1]))
        cropped.save(f"public/assets/services/rooms/{slug}.jpg", quality=95)
        print(f"Saved {slug}: {cropped.size}")

print("All 12 refined room tiles saved!")
