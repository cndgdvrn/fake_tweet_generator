export const formatTime = (time) => {
    const [hours, minutes] = time.split(":");
    let formattedTime = "";
    if (hours > 12) {
        formattedTime = `${hours - 12}:${minutes} PM`;
    } else {
        formattedTime = `${hours}:${minutes} AM`;
    }
    return formattedTime;
}
