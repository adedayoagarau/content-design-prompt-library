import * as cheerio from 'cheerio';

export async function extractFromUrl(url: string): Promise<string> {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);

    // Remove script and style elements
    $('script, style, nav, header, footer').remove();

    // Extract main content
    const mainContent = $('main, article, [role="main"], .content, .main-content').text();

    // Fallback to body if no main content found
    const content = mainContent || $('body').text();

    // Clean up whitespace
    return content
      .replace(/\s+/g, ' ')
      .trim();
  } catch (error) {
    console.error('Error extracting from URL:', error);
    throw new Error('Failed to extract content from URL');
  }
}

export async function extractFromDocument(file: File): Promise<string> {
  const fileType = file.type;

  if (fileType === 'text/plain') {
    return await file.text();
  }

  // For other file types, we'll handle them on the client side
  // and send the extracted text to the server
  throw new Error('Unsupported file type. Please extract text client-side.');
}

export function calculateReadabilityMetrics(text: string) {
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
  const words = text.split(/\s+/).filter(w => w.length > 0);
  const syllables = words.reduce((count, word) => count + countSyllables(word), 0);

  const avgWordsPerSentence = words.length / sentences.length || 0;
  const avgSyllablesPerWord = syllables / words.length || 0;

  // Flesch-Kincaid Grade Level
  const fleschKincaid = 0.39 * avgWordsPerSentence + 11.8 * avgSyllablesPerWord - 15.59;

  // Reading time (avg 200 words per minute)
  const readingTimeMinutes = words.length / 200;

  return {
    fleschKincaidGrade: Math.max(0, Math.round(fleschKincaid * 10) / 10),
    avgSentenceLength: Math.round(avgWordsPerSentence * 10) / 10,
    avgSyllablesPerWord: Math.round(avgSyllablesPerWord * 10) / 10,
    wordCount: words.length,
    sentenceCount: sentences.length,
    readingTimeMinutes: Math.round(readingTimeMinutes * 10) / 10,
  };
}

function countSyllables(word: string): number {
  word = word.toLowerCase();
  if (word.length <= 3) return 1;

  word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
  word = word.replace(/^y/, '');

  const syllableMatches = word.match(/[aeiouy]{1,2}/g);
  return syllableMatches ? syllableMatches.length : 1;
}

export function extractContentMetadata(text: string) {
  const paragraphs = text.split(/\n\n+/).filter(p => p.trim().length > 0);
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
  const words = text.split(/\s+/).filter(w => w.length > 0);
  const characters = text.length;

  return {
    wordCount: words.length,
    characterCount: characters,
    paragraphCount: paragraphs.length,
    sentenceCount: sentences.length,
    estimatedReadingTime: Math.ceil(words.length / 200), // minutes
  };
}
