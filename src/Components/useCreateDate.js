const UseCreateDate = () => {
    const dateObj = new Date();
    
    // Array of month names
    const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    
    // Get month name and year
    const monthName = monthNames[dateObj.getMonth()];
    const year = dateObj.getFullYear();
    
    // Get day and time with leading zeros for single digits
    const day = dateObj.getDate().toString().padStart(2, '0');
    const hours = dateObj.getHours().toString().padStart(2, '0');
    const minutes = dateObj.getMinutes().toString().padStart(2, '0');

    // Format date string
    const date = `${monthName} ${day}, ${year} [${hours}:${minutes}]`;

    return date;
}

export default UseCreateDate;