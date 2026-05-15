#!/bin/bash

# Portfolio Setup Script
# This script helps set up the portfolio website

echo "🚀 Vichitra Mohan Portfolio Setup"
echo "=================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

echo ""
echo "📁 Setting up image directories..."

# Create image directories
mkdir -p public/images/user_image
mkdir -p public/images/assam_images
mkdir -p public/images/goa_images
mkdir -p public/images/upmsme_images

echo "✅ Image directories created"
echo ""

# Copy images from project_image folder
if [ -d "project_image" ]; then
    echo "📸 Copying images..."
    
    # Copy user image
    if [ -f "project_image/user_image/vichitra-mohan.jpg" ]; then
        cp project_image/user_image/vichitra-mohan.jpg public/images/user_image/
        echo "✅ User image copied"
    fi
    
    # Copy Assam images
    if [ -d "project_image/assam_images" ]; then
        cp project_image/assam_images/* public/images/assam_images/ 2>/dev/null || true
        echo "✅ Assam images copied"
    fi
    
    # Copy Goa images
    if [ -d "project_image/goa_images" ]; then
        cp project_image/goa_images/* public/images/goa_images/ 2>/dev/null || true
        echo "✅ Goa images copied"
    fi
    
    # Copy UP MSME images
    if [ -d "project_image/upmsme_images" ]; then
        cp project_image/upmsme_images/* public/images/upmsme_images/ 2>/dev/null || true
        echo "✅ UP MSME images copied"
    fi
else
    echo "⚠️  project_image folder not found. Please manually copy images:"
    echo "   - Copy project_image/user_image/* to public/images/user_image/"
    echo "   - Copy project_image/assam_images/* to public/images/assam_images/"
    echo "   - Copy project_image/goa_images/* to public/images/goa_images/"
    echo "   - Copy project_image/upmsme_images/* to public/images/upmsme_images/"
fi

echo ""
echo "📋 Creating .env.local from .env.example..."
if [ ! -f ".env.local" ]; then
    cp .env.example .env.local
    echo "✅ .env.local created - please update with your information"
else
    echo "⚠️  .env.local already exists"
fi

echo ""
echo "✨ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Update .env.local with your information"
echo "2. Update contact information in components/sections/contact.tsx"
echo "3. Add your resume at public/resume.pdf"
echo "4. Run 'npm run dev' to start the development server"
echo ""
