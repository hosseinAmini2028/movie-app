export const formatDate = (currentDate: Date | undefined | null) =>
  currentDate
    ? `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-${currentDate.getDate().toString().padStart(2, "0")}`
    : null;

export const convertMinutesToHHMM = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(remainingMinutes).padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}`;
};
