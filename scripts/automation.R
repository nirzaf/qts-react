#!/usr/bin/env Rscript

# Automation script to generate SEO-related assets for the site.
# This script sequentially runs the npm tasks that create the site's
# sitemap, image sitemap, video sitemap, news sitemap, robots.txt and RSS feed.
#
# Run this script with: Rscript scripts/automation.R
# It requires Node.js and npm to be installed in the environment.

commands <- c(
  "npm run generate-sitemap",
  "npm run generate-image-sitemap",
  "npm run generate-video-sitemap",
  "npm run generate-news-sitemap",
  "npm run generate-robots",
  "npm run generate-rss"
)

for (cmd in commands) {
  cat("Running:", cmd, "\n")
  status <- system(cmd)
  if (status != 0) {
    stop(paste("Command failed:", cmd), call. = FALSE)
  }
}

cat("All SEO assets generated successfully.\n")

