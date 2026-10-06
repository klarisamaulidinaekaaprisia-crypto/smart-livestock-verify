# Smart Livestock Verify

Create a modern web dashboard called "IoTernak" for:

"IoTernak — Sistem Verifikasi Vaksin dan Pencegahan Penyakit Mulut dan Kuku pada Sapi dan Kambing Berbasis RFID"

IMPORTANT:
Use the uploaded reference image as the main visual design inspiration.

Do NOT copy the exact content from the reference image.
Instead, replicate its overall UI/UX design language:
- modern SaaS dashboard
- clean and minimal
- large white content area
- light gray/off-white background
- rounded cards
- soft pastel accent colors
- subtle borders
- very light shadows
- compact sidebar navigation
- generous spacing
- modern typography
- professional but friendly appearance
- desktop-first responsive layout

The website should look like a polished professional IoT livestock management dashboard, NOT like a generic agricultural website.

==================================================
1. DESIGN STYLE
==================================================

Follow the visual style of the reference image.

Overall:
- Background: very light gray/off-white (#F7F7F8)
- Main content: white
- Sidebar: slightly tinted white/light lavender-gray
- Cards: white with subtle border
- Border radius: 12–18px
- Shadows: extremely subtle
- Typography: modern sans-serif such as Inter
- Text color: dark charcoal
- Secondary text: muted gray
- Use pastel colors for status indicators and cards

Use these accent colors:
- Green pastel: vaccination verified / LAYAK
- Red/coral pastel: DITOLAK / warning
- Blue pastel: livestock information
- Purple/lavender pastel: RFID activity
- Yellow/cream pastel: attention or upcoming vaccination

Avoid:
- gradients everywhere
- excessive illustrations
- excessive green agricultural colors
- overly colorful UI
- cartoonish farm graphics
- large hero banners
- unnecessary animations

The interface should feel similar to a modern school management / SaaS dashboard.

==================================================
2. MAIN LAYOUT
==================================================

Create a fixed left sidebar and main dashboard content.

Desktop layout:

--------------------------------------------------
| SIDEBAR | TOP HEADER                         |
|         |------------------------------------|
|         | MAIN CONTENT                       |
|         |                                    |
|         | Dashboard cards                    |
|         |                                    |
|         | RFID verification + animal data    |
|         |                                    |
--------------------------------------------------

Sidebar width approximately 220–250px.

Sidebar should contain:

Logo:
IoTernak
Small subtitle:
"Smart Livestock System"

Navigation:

MAIN MENU
- Overview
- Verifikasi RFID
- Data Hewan
- Vaksinasi
- Riwayat Pemeriksaan

MONITORING
- Status PMK
- Aktivitas RFID
- Laporan

SYSTEM
- Pengguna
- Pengaturan

At the bottom:
User profile card:
- Admin Peternakan
- Administrator

Use simple modern icons such as Lucide icons.

The active navigation item should have:
- white background
- subtle shadow
- rounded corners
- dark text
- small accent icon

==================================================
3. TOP HEADER
==================================================

Top header should contain:

Left:
Breadcrumb:
IoTernak / Overview

Right:
- notification icon
- search icon
- user avatar/profile

Header should be clean and minimal.

==================================================
4. DASHBOARD / OVERVIEW
==================================================

Page title:

"Overview"

Subtitle:

"Monitor data hewan, status vaksinasi, dan hasil verifikasi RFID."

Create four main statistic cards.

CARD 1:
Total Hewan

Example:
1,248

Small text:
"hewan terdaftar"

Icon:
Cow / livestock icon

Pastel blue background.

CARD 2:
Sudah Divaksin

Example:
1,086

Small text:
"hewan"

Green pastel accent.

CARD 3:
Belum Divaksin

Example:
162

Small text:
"perlu pemeriksaan"

Yellow pastel accent.

CARD 4:
Verifikasi Hari Ini

Example:
86

Small text:
"pemeriksaan RFID"

Purple pastel accent.

Each card should have:
- icon
- large number
- label
- small trend or information indicator

==================================================
5. RFID VERIFICATION SECTION
==================================================

This is the MOST IMPORTANT feature.

Create a large card titled:

"Verifikasi RFID"

Subtitle:

"Scan tag RFID untuk memeriksa status vaksinasi hewan."

The card should visually emphasize RFID scanning.

Include:

RFID icon / scanner illustration

Text:
"Siap melakukan pemindaian"

Button:
"Mulai Scan RFID"

Secondary button:
"Input ID Manual"

When an RFID is detected, display:

ID RFID:
RFID-001245

Jenis Hewan:
Sapi

Status Vaksin PMK:
Sudah Divaksin

Tanggal Vaksin Terakhir:
15 Agustus 2026

Status:
LAYAK

Use a large green status badge:

✓ LAYAK

Text below:
"Hewan memenuhi aturan verifikasi vaksin."

The LAYAK card should use a very soft green background.

For rejected animals:

Status:
DITOLAK

Use a soft coral/red background.

Example reason:
"Status vaksin belum memenuhi persyaratan."

==================================================
6. RECENT RFID ACTIVITY
==================================================

Create a section titled:

"Aktivitas RFID Terbaru"

Use a clean table similar to a modern SaaS dashboard.

Columns:

ID RFID
Jenis Hewan
Tanggal Pemeriksaan
Status Vaksin
Hasil
Petugas

Example data:

RFID-001245 | Sapi | 05 Okt 2026, 14:32 | Sudah | LAYAK | Admin

RFID-001246 | Kambing | 05 Okt 2026, 14:28 | Sudah | LAYAK | Admin

RFID-001247 | Sapi | 05 Okt 2026, 14:21 | Belum | DITOLAK | Admin

Use pill badges:
- LAYAK = soft green
- DITOLAK = soft red
- Sudah = soft blue
- Belum = soft yellow

==================================================
7. ANIMAL DATA SECTION
==================================================

Create a page called:

"Data Hewan"

Subtitle:

"Kelola informasi hewan yang terdaftar dalam sistem IoTernak."

At the top:

Search bar:
"Cari ID RFID atau jenis hewan..."

Filter button:
"Filter"

Button:
"+ Tambah Hewan"

Table:

ID RFID
Nomor Tag
Jenis
Jenis Kelamin
Umur
Status Vaksin
Vaksin Terakhir
Status

Example:

RFID-001245
TAG-001245
Sapi
Jantan
3 Tahun
Sudah
15 Agustus 2026
LAYAK

RFID-001246
TAG-001246
Kambing
Betina
2 Tahun
Sudah
20 Agustus 2026
LAYAK

==================================================
8. VACCINATION PAGE
==================================================

Create page:

"Vaksinasi"

Show:

- total vaccinated
- not vaccinated
- vaccination due soon
- vaccination coverage

Use modern cards and charts.

Create a clean chart showing:

"Status Vaksinasi"

Categories:
- Sudah Divaksin
- Belum Divaksin
- Perlu Booster

Use soft pastel colors.

Also create a vaccination schedule section:

"Jadwal Vaksinasi"

Columns:
Hewan
Jenis
Vaksin Terakhir
Jadwal Berikutnya
Status

==================================================
9. ANIMAL DETAIL PAGE
==================================================

When clicking an animal, open a detail page.

Title:

"Detail Hewan"

Show a profile card:

ID RFID
RFID-001245

Nomor Tag
TAG-001245

Jenis
Sapi

Jenis Kelamin
Jantan

Umur
3 Tahun

Then a large vaccination status card:

STATUS VAKSIN PMK

✓ LAYAK

Vaksin terakhir:
15 Agustus 2026

Also show:

"Riwayat Vaksinasi"

Timeline:

15 Agustus 2026
Vaksin PMK
Status: Berhasil

15 Februari 2026
Vaksin PMK
Status: Berhasil

==================================================
10. STATUS PMK PAGE
==================================================

Create a monitoring page:

"Status PMK"

Show a dashboard containing:

Total Hewan
Sudah Divaksin
Belum Divaksin
Perlu Pemeriksaan

Create a status distribution visualization.

Important:
Do not claim that RFID or vaccination verification alone diagnoses PMK.

The system is for vaccination verification and prevention monitoring.

Use wording such as:
"Status verifikasi vaksin"
instead of:
"Diagnosis PMK"

==================================================
11. RFID SCAN EXPERIENCE
==================================================

The RFID scanning experience should be visually prominent.

When user clicks "Mulai Scan RFID":

Show a modal/card:

"Menunggu RFID..."

RFID reader icon in the center.

Animation:
subtle scanning/pulse animation.

Text:

"Dekatkan tag RFID hewan ke reader."

When RFID is detected:

"RFID berhasil dibaca"

Then automatically show the animal information.

Example:

RFID-001245

Sapi

Status vaksin:
Sudah

Vaksin terakhir:
15 Agustus 2026

Result:

✓ LAYAK

Make the result extremely easy to understand from several meters away.

==================================================
12. RESULT COLORS
==================================================

LAYAK:

Use:
- soft green background
- green icon
- dark green text

DITOLAK:

Use:
- soft red/coral background
- red icon
- dark red text

WARNING:

Use:
- soft yellow background
- amber icon
- dark amber text

INFO:

Use:
- soft blue background
- blue icon
- dark blue text

Do NOT use highly saturated colors.

==================================================
13. RESPONSIVE DESIGN
==================================================

Desktop:
- sidebar visible
- dashboard uses multiple columns
- tables fully visible

Tablet:
- sidebar becomes compact
- cards rearrange

Mobile:
- sidebar becomes bottom navigation or hamburger menu
- dashboard cards become one/two columns
- tables become responsive cards
- RFID verification remains the main prominent feature

==================================================
14. COMPONENT DESIGN
==================================================

Create reusable components:

Sidebar
TopHeader
StatCard
RFIDScannerCard
VerificationResult
StatusBadge
AnimalTable
VaccinationTable
AnimalProfile
VaccinationTimeline
ActivityTable
ChartCard
SearchBar
FilterButton
Modal
UserProfile

Use consistent spacing and typography throughout the application.

==================================================
15. DATA / BACKEND PREPARATION
==================================================

For now, use realistic mock data.

However, structure the frontend so it can later connect to an IoT RFID backend/API.

Prepare the application architecture for:

GET /api/animals
GET /api/animals/:id
GET /api/vaccinations
GET /api/rfid/:id
POST /api/rfid/verify
GET /api/dashboard
GET /api/rfid/activity

The RFID verification flow should be designed so that the frontend receives an RFID ID from the backend and then retrieves the corresponding animal and vaccination information.

==================================================
16. IMPORTANT UX PRINCIPLE
==================================================

The primary purpose of the application is:

RFID SCAN
↓
IDENTIFY ANIMAL
↓
CHECK VACCINATION DATA
↓
VERIFY RULES
↓
SHOW RESULT

Therefore, "Verifikasi RFID" must be one of the most prominent features in the dashboard.

The user should be able to understand the result within 2–3 seconds.

==================================================
17. VISUAL REFERENCE
==================================================

Use the uploaded image as visual inspiration.

Specifically replicate:
- left vertical sidebar
- rounded active menu
- clean white cards
- soft gray background
- large spacious content
- compact header
- rounded rectangular UI
- pastel colored cards
- subtle borders
- minimal shadows
- modern SaaS dashboard aesthetic
- clean tables
- modern typography
- strong visual hierarchy

BUT adapt everything to the IoTernak livestock RFID verification context.

Do not reproduce the reference image's school/exam content.

The final result should feel like:

"Modern SaaS dashboard + IoT monitoring + livestock vaccination management"

rather than a traditional farm management website.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/2d098ffd-602d-4538-a36b-cda0d6b9e013).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
