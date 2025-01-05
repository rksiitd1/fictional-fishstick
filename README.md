# Notes App

A clean, intuitive note-taking application built with Next.js and Tailwind CSS. The app features a legal pad-style interface with multiple contexts for organizing your notes.

![Notes App Screenshot]
<!-- Add a screenshot of your app here -->

## Features

- 📝 Legal pad style interface with lined paper design
- 📑 Multiple contexts (Work, Personal, Ideas)
- 🎨 Clean, minimalist yellow notepad design
- 💾 Real-time note saving within sessions
- 📱 Responsive design for all devices

## Tech Stack

- [Next.js 13+](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Geist Font](https://vercel.com/font) - Typography

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/notes-app.git
```

2. Install dependencies:
```bash
cd notes-app
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
notes-app/
├── app/
│   ├── components/
│   │   ├── NoteArea.tsx    # Text area component with lined paper styling
│   │   └── Tab.tsx         # Tab navigation component
│   ├── globals.css         # Global styles and Tailwind configuration
│   ├── layout.tsx          # Root layout with font configuration
│   └── page.tsx            # Main page component with tab logic
├── public/
└── package.json
```

## Deployment

The app is deployed on Vercel. To deploy your own instance:

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Deploy

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.