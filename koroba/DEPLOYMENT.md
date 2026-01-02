# Deployment Guide for Koroba

## Quick Deploy to Vercel (5 minutes)

### Option 1: One-Click Deploy (Recommended)

1. **Import to Vercel**:
   - Visit [vercel.com/new](https://vercel.com/new)
   - Import this repository: `https://github.com/adedayoagarau/content-design-prompt-library`
   - Select the `koroba` directory as the root directory

2. **Configure Environment Variables**:
   - Add `ANTHROPIC_API_KEY` in Vercel dashboard
   - Get your API key from [Anthropic Console](https://console.anthropic.com/)

3. **Deploy**:
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete
   - Your app will be live at `https://koroba-[unique-id].vercel.app`

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from koroba directory
cd koroba
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? koroba
# - Directory? ./
# - Override settings? No

# Add environment variable
vercel env add ANTHROPIC_API_KEY

# Redeploy
vercel --prod
```

## Environment Variables

**Required:**
- `ANTHROPIC_API_KEY` - Your Claude API key from Anthropic Console

**How to set in Vercel:**
1. Go to Project Settings > Environment Variables
2. Add variable name: `ANTHROPIC_API_KEY`
3. Add value: Your API key
4. Select environments: Production, Preview, Development
5. Click "Save"

## Post-Deployment

### Custom Domain (Optional)
1. Go to Project Settings > Domains
2. Add your custom domain (e.g., `koroba.yourdomain.com`)
3. Configure DNS records as instructed by Vercel
4. SSL certificate will be auto-provisioned

### Analytics (Optional)
- Enable Vercel Analytics in Project Settings
- Enable Web Vitals monitoring
- Enable Speed Insights

## Troubleshooting

### Build Errors
```bash
# Test build locally first
npm run build
```

### Environment Variable Issues
- Ensure `ANTHROPIC_API_KEY` is set in Vercel dashboard
- Redeploy after adding environment variables

### TypeScript Errors
```bash
# Check types locally
npm run lint
```

## Production Checklist

- [x] Environment variables configured
- [x] Build succeeds locally
- [x] API key is valid
- [x] .env.local is in .gitignore (security)
- [ ] Custom domain configured (optional)
- [ ] Analytics enabled (optional)
- [ ] Error monitoring setup (optional)

## Ship Date: Monday

Target deployment URL will be shared after deployment completes.

---

For support: adedayoagarau@gmail.com
