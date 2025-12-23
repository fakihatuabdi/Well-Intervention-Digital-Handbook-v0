const STORAGE_KEY = 'app.bookmarks';

function read() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function write(list) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

export function getBookmarks() {
  return read();
}

export function isBookmarked(id) {
  return read().some((b) => String(b.id) === String(id));
}

export function addBookmark(bookmark) {
  const list = read();
  if (list.some((b) => String(b.id) === String(bookmark.id))) return list;
  const next = [{ ...bookmark, createdAt: Date.now() }, ...list];
  write(next);
  return next;
}

export function removeBookmark(id) {
  const list = read();
  const next = list.filter((b) => String(b.id) !== String(id));
  write(next);
  return next;
}

export function toggleBookmark(bookmark) {
  return isBookmarked(bookmark.id)
    ? removeBookmark(bookmark.id)
    : addBookmark(bookmark);
}
