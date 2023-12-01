// I couldn't (and also didn't need to) add date-fns so I created this function
export function formatDistanceToNow(dateStr: string): string {
  const now = new Date();
  const date = new Date(dateStr);
  const difInMilliseconds = now.getTime() - date.getTime();

  const seconds = Math.floor(difInMilliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const years = Math.floor(days / 365);

  if (seconds < 60) {
    return `${seconds} second${seconds === 1 ? '' : 's'} ago`;
  } else if (minutes < 60) {
    return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
  } else if (hours < 24) {
    return `${hours} hour${hours === 1 ? '' : 's'} ago`;
  } else if (days < 7) {
    return `${days} day${days === 1 ? '' : 's'} ago`;
  } else if (weeks < 52) {
    return `${weeks} week${weeks === 1 ? '' : 's'} ago`;
  } else {
    return `${years} year${years === 1 ? '' : 's'} ago`;
  }
}
