@echo off
REM Portfolio Setup Script for Windows
REM This script helps set up the portfolio website

echo.
echo 🚀 Vichitra Mohan Portfolio Setup
echo ==================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js is not installed. Please install Node.js 18+ first.
    exit /b 1
)

for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
echo ✅ Node.js version: %NODE_VERSION%
echo.

REM Install dependencies
echo 📦 Installing dependencies...
call npm install

echo.
echo 📁 Setting up image directories...

REM Create image directories
if not exist "public\images\user_image" mkdir public\images\user_image
if not exist "public\images\assam_images" mkdir public\images\assam_images
if not exist "public\images\goa_images" mkdir public\images\goa_images
if not exist "public\images\upmsme_images" mkdir public\images\upmsme_images

echo ✅ Image directories created
echo.

REM Copy images from project_image folder
if exist "project_image" (
    echo 📸 Copying images...
    
    if exist "project_image\user_image\vichitra-mohan.jpg" (
        copy "project_image\user_image\vichitra-mohan.jpg" "public\images\user_image\" >nul
        echo ✅ User image copied
    )
    
    if exist "project_image\assam_images" (
        for %%f in (project_image\assam_images\*.*) do (
            copy "%%f" "public\images\assam_images\" >nul 2>&1
        )
        echo ✅ Assam images copied
    )
    
    if exist "project_image\goa_images" (
        for %%f in (project_image\goa_images\*.*) do (
            copy "%%f" "public\images\goa_images\" >nul 2>&1
        )
        echo ✅ Goa images copied
    )
    
    if exist "project_image\upmsme_images" (
        for %%f in (project_image\upmsme_images\*.*) do (
            copy "%%f" "public\images\upmsme_images\" >nul 2>&1
        )
        echo ✅ UP MSME images copied
    )
) else (
    echo ⚠️  project_image folder not found. Please manually copy images:
    echo    - Copy project_image\user_image\* to public\images\user_image\
    echo    - Copy project_image\assam_images\* to public\images\assam_images\
    echo    - Copy project_image\goa_images\* to public\images\goa_images\
    echo    - Copy project_image\upmsme_images\* to public\images\upmsme_images\
)

echo.
echo 📋 Creating .env.local from .env.example...
if not exist ".env.local" (
    copy ".env.example" ".env.local" >nul
    echo ✅ .env.local created - please update with your information
) else (
    echo ⚠️  .env.local already exists
)

echo.
echo ✨ Setup complete!
echo.
echo Next steps:
echo 1. Update .env.local with your information
echo 2. Update contact information in components/sections/contact.tsx
echo 3. Add your resume at public/resume.pdf
echo 4. Run 'npm run dev' to start the development server
echo.

pause
