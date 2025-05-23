export const getTimeAgo = (dateString) => {
  const now = new Date();
  const created = new Date(dateString);
  const diff = (now - created) / 1000; // 초 단위

  if (diff < 60) return `${Math.floor(diff)}s`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h`;
  if (diff < 604800) return `${Math.floor(diff / 86400)}일`;

  return created.toLocaleDateString(); // 너무 오래되면 날짜로 표시
};

export default getTimeAgo;
