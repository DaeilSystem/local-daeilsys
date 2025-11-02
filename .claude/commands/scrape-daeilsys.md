# Scrape DaeilSys Website Data

You are a web scraping agent that collects data from https://www.daeilsys.com using Playwright MCP tools.

## Your Mission

Navigate through the daeilsys.com website and collect all important content to build a comprehensive data structure that can be used to recreate the website.

## Tools You Must Use

- `mcp__playwright__browser_navigate` - Navigate to URLs
- `mcp__playwright__browser_snapshot` - Get page structure and content
- `mcp__playwright__browser_click` - Click on elements if needed
- `mcp__playwright__browser_evaluate` - Extract specific data if needed

## Pages to Scrape

### 1. Homepage
- URL: https://www.daeilsys.com/
- Extract: Hero slider content, latest updates, newsroom preview, case studies preview

### 2. Company Section
- Overview: https://www.daeilsys.com/company/overview/
- Vision and Mission: https://www.daeilsys.com/company/vision/
- Values: https://www.daeilsys.com/company/values/
- Company History: https://www.daeilsys.com/company/company-history/
- Sustainability Management: https://www.daeilsys.com/company/sustainability-management/

### 3. Products - Active Vibration Isolation Systems
- DVIA-T: https://www.daeilsys.com/products/active-vibration-isolation-systems/tabletop-active-vibration-isolation-platform/
- DVIA-M: https://www.daeilsys.com/products/active-vibration-isolation-systems/advanced-active-vibration-isolation-system/
- DVIA-ML: https://www.daeilsys.com/product/active-vibration-isolation-systems/dvia-ml-active-vibration-isolation-system/
- DVIA-MLP: https://www.daeilsys.com/product/active-vibration-isolation-systems/dvia-mlp1000-active-vibration-isolation-system/
- DVIA-MB: https://www.daeilsys.com/products/active-vibration-isolation-systems/base-pneumatic-active-vibration-isolation-platform/
- DVIA-MO: https://www.daeilsys.com/products/active-vibration-isolation-systems/active-vibration-isolation-optical-table/
- DVIA-U: https://www.daeilsys.com/products/active-vibration-isolation-systems/modular-active-vibration-isolation-platform/
- DVIA-P: https://www.daeilsys.com/products/active-vibration-isolation-systems/active-pneumatic-vibration-isolation-system/

### 4. Products - Optical Tables
- Research Grade: https://www.daeilsys.com/products/optical-tables/research-grade-optical-table-top/
- Scientific Grade: https://www.daeilsys.com/products/optical-tables/scientific-grade-optical-table-top/

### 5. Newsroom
- Main page: https://www.daeilsys.com/newsroom/
- Get the latest 5-10 articles with titles, dates, excerpts, and links

### 6. Support/Case Studies
- Main page: https://www.daeilsys.com/support/case-studies/
- Get the latest 3-5 case studies

## Data Extraction Process

For each page you visit:

1. **Navigate** to the URL using `mcp__playwright__browser_navigate`
2. **Capture** page snapshot using `mcp__playwright__browser_snapshot`
3. **Extract** the following information:
   - Page title (h1, h2 headings)
   - Main content (paragraphs, descriptions)
   - Images (alt text and descriptions)
   - Lists (features, specifications, bullet points)
   - Links and CTAs
   - Meta information (dates, categories, tags)

4. **Structure** the data in a clean JSON format

## Output Format

Save all collected data to: `data/scraped-daeilsys.json`

Structure the JSON like this:

```json
{
  "homepage": {
    "title": "...",
    "hero": {
      "slides": [
        {
          "heading": "...",
          "description": "...",
          "cta": "...",
          "ctaLink": "..."
        }
      ]
    },
    "latestUpdates": [...],
    "newsroomPreview": [...],
    "caseStudiesPreview": [...]
  },
  "company": {
    "overview": {
      "title": "...",
      "content": "...",
      "sections": [...]
    },
    "vision": {...},
    "values": {...},
    "history": {...},
    "sustainability": {...}
  },
  "products": {
    "activeVibrationIsolation": [
      {
        "id": "dvia-t",
        "name": "DVIA-T",
        "fullName": "Tabletop Active Vibration Isolation Platform",
        "category": "Active Vibration Isolation Systems",
        "description": "...",
        "features": [...],
        "specifications": {...},
        "applications": [...],
        "images": [...]
      }
    ],
    "opticalTables": [...]
  },
  "newsroom": [
    {
      "title": "...",
      "date": "...",
      "excerpt": "...",
      "link": "...",
      "category": "..."
    }
  ],
  "caseStudies": [...]
}
```

## Important Guidelines

1. **Be thorough**: Extract ALL meaningful text content from each page
2. **Clean the data**: Remove empty strings, null values, and navigation elements
3. **Preserve structure**: Maintain the hierarchy of headings, sections, and subsections
4. **Handle images**: Extract alt text and any descriptive captions
5. **Get metadata**: Dates, categories, tags, author info (if available)
6. **Error handling**: If a page fails to load, note it and continue with other pages
7. **Progress reporting**: After every 5-10 pages, report your progress

## Final Report

After completing the scraping, provide:

1. **Summary Statistics**:
   - Total pages scraped
   - Total products collected
   - Total news articles collected
   - Total case studies collected
   - Any failed pages or errors

2. **File Location**: Path to the saved JSON file

3. **Data Quality Notes**: Any issues, missing data, or special observations

4. **Next Steps**: Suggestions for using this data to build pages

## Start Now

Begin by navigating to the homepage and systematically work through all pages listed above. Save your progress to the JSON file after every major section (homepage, company, products, newsroom, case studies).
