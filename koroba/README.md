# Koroba 🎨

**AI-powered content alignment analysis with visual feedback**

Koroba (a traditional Yoruba hairstyle) is a web application that analyzes your content across 6 critical parameters and provides visual, actionable feedback to improve alignment with your brand voice and content goals.

## ✨ Features

- **Multi-Parameter Analysis**: Analyze content across 6 dimensions:
  - 🎭 Voice & Tone
  - ♿ Accessibility (WCAG 3.0)
  - 📐 Structure & Format
  - 🧠 Psychological Impact
  - 📱 Platform Optimization
  - 💼 Business Clarity

- **Visual Feedback**:
  - Animated score gauges
  - Color-coded progress bars
  - Inline issue highlighting with tooltips
  - Side-by-side original vs. suggested rewrite

- **9 Content Types Supported**:
  - LinkedIn Posts
  - Twitter/X Posts
  - Blog Posts
  - Marketing Copy
  - Microcopy (UI)
  - User Flows
  - Email
  - Product Descriptions
  - Documentation

- **AI-Powered Rewrites**: Get suggested improvements when score is below 70%
- **Export Capabilities**: Download analysis results as JSON
- **Custom Voice Guidelines**: Add your brand voice for personalized analysis

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- Anthropic API key ([Get one here](https://console.anthropic.com/))

### Installation

1. Clone the repository:
```bash
git clone https://github.com/adedayoagarau/content-design-prompt-library.git
cd content-design-prompt-library/koroba
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Add your Anthropic API key to `.env.local`:
```
ANTHROPIC_API_KEY=your_api_key_here
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📖 Usage

1. **Select Content Type**: Choose from 9 content types (LinkedIn, Twitter, Blog, etc.)
2. **Paste Your Content**: Add the content you want to analyze
3. **Add Voice Guidelines** (Optional): Describe your brand voice
4. **Select Parameters**: Choose which parameters to analyze (default: all 6)
5. **Click Analyze**: Get instant visual feedback with scores, issues, and suggestions
6. **Review & Export**: View results, copy suggested rewrites, or export analysis

## 🛠️ Built With

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Radix UI** - Accessible components
- **Recharts** - Data visualization
- **Anthropic Claude API** - AI analysis engine
- **282 Content Design Prompts** - Comprehensive prompt library

## 📊 Analysis Parameters

### 1. Voice & Tone
Evaluates brand alignment, formality, authenticity, and emotional resonance.

### 2. Accessibility
Checks WCAG 3.0 compliance, readability, plain language, and cognitive load.

### 3. Structure & Format
Analyzes hook effectiveness, flow, scanability, and CTA clarity.

### 4. Psychological Impact
Examines social proof, loss aversion, reciprocity, and emotional engagement.

### 5. Platform Optimization
Reviews platform-specific best practices, character limits, and engagement tactics.

### 6. Business Clarity
Assesses value proposition clarity, specificity, credibility, and measurable outcomes.

## 🎯 Use Cases

- **Founders**: Optimize social media posts for engagement
- **Content Teams**: Ensure brand voice consistency
- **Writers**: Get instant feedback on accessibility and clarity
- **Marketers**: Improve conversion-focused copy
- **Product Designers**: Refine microcopy and user flows

## 🤝 Contributing

This project is part of the [Content Design Prompt Library](https://github.com/adedayoagarau/content-design-prompt-library). Contributions are welcome!

## 📝 License

MIT License - see [LICENSE](../LICENSE) for details.

## 👤 Author

**Adedayo Agarau**
- LinkedIn: [@adedayoagarau](https://linkedin.com/in/adedayoagarau)
- Email: adedayoagarau@gmail.com
- GitHub: [@adedayoagarau](https://github.com/adedayoagarau)

## 🙏 Acknowledgments

- Built with Claude AI (Anthropic)
- Powered by 282 enterprise-grade content design prompts
- Inspired by the need for visual, actionable content feedback

---

**Ship date**: January 2026
