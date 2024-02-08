import moment from "moment";

/**
 * Return ellipsis of a given string
 * @param {string} text
 * @param {number} size
 */
const ellipsis = (text, size) => {
  return `${text.split(' ').slice(0, size).join(' ')}...`;
};

function timeAgo(timestamp) {

  const currentDate = new Date();
  const postDate = new Date(timestamp);
  const timeDifference = currentDate - postDate;

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(weeks / 4);
  const years = Math.floor(months / 12);

  if (years > 0) {
    return `${years}y${years > 1 ? '' : ''}`;
  } if (months > 0) {
    return `${months}m${months > 1 ? '' : ''}`;
  } if (weeks > 0) {
    return `${weeks}w${weeks > 1 ? '' : ''}`;
  } if (days > 0) {
    return `${days}d${days > 1 ? '' : ''}`;
  } if (hours > 0) {
    return `${hours}h${hours > 1 ? '' : ''}`;
  } if (minutes > 0) {
    return `${minutes}m${minutes > 1 ? '' : ''}`;
  }
  return `${seconds}s${seconds !== 1 ? '' : ''}`;
}


function messageTime(timestamp) {

  const currentDate = new Date();
  // const postDate = new Date(timestamp);
  const utcDateString = timestamp;
  const utcMoment = moment.utc(utcDateString);
  const localMoment = utcMoment.local();
  const timeDifference = currentDate - localMoment;

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const date = Math.floor(hours / 24);

  if (date > 0) {
    return localMoment.format("MMM D, YYYY");
  } if (hours > 0) {
    return `${hours}h${hours > 1 ? '' : ''}`;
  } if (minutes > 0) {
    return `${minutes}m${minutes > 1 ? '' : ''}`;
  }
  return `${seconds}s${seconds !== 1 ? '' : ''}`;
}


function pollTime(timestamp) {
  const currentDate = new Date();
  const utcMoment = moment.utc(timestamp);
  const localMoment = utcMoment.local();
  const timeDifference = localMoment - currentDate;

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);

  if (weeks > 0) {
    return `${weeks} week${weeks !== 1 ? 's' : ''} left`;
  } if (days > 0) {
    return `${days} day${days !== 1 ? 's' : ''} left`;
  } if (hours > 0) {
    return `${hours} hour${hours !== 1 ? 's' : ''} left`;
  } if (minutes > 0) {
    return `${minutes} minute${minutes !== 1 ? 's' : ''} left`;
  }  
    return 'Poll ending...';
  
}


function addTimeToDate(baseDate, days, hours, minutes) {
  const resultDate = new Date(baseDate);
  resultDate.setDate(resultDate.getDate() + days);
  resultDate.setHours(resultDate.getHours() + hours);
  resultDate.setMinutes(resultDate.getMinutes() + minutes);


  return resultDate;
}



export { ellipsis, timeAgo, messageTime, pollTime, addTimeToDate };