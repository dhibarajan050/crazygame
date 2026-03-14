/**
 * Convert a game title to a URL-friendly slug
 * Example: "Neon Velocity" → "neon-velocity"
 * Example: "Idle Sprint Race 3D" → "idle-sprint-race-3d"
 */
export function slugify(title: string): string {
  if (!title) return "";

  return title
    .toLowerCase() // Convert to lowercase
    .trim() // Remove leading/trailing whitespace
    .replace(/[^\w\s-]/g, "") // Remove special characters except spaces and hyphens
    .replace(/[\s_-]+/g, "-") // Replace spaces, underscores with single hyphen
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
}

/**
 * Reverse function: convert slug back to original title
 * Note: This is for reference only, use the actual title from database
 */
export function unslugify(slug: string): string {
  if (!slug) return "";

  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
