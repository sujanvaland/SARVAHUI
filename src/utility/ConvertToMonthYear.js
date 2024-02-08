import moment from 'moment';

const convertToMonthYear = (dateString) => {
    const dateObj = moment(dateString);
    return dateObj.format('MMMM YYYY');
};

function formatDate(inputDateTime) {
    const utcDateString = inputDateTime;
    const utcMoment = moment.utc(utcDateString);
    const localMoment = utcMoment.local();
    return localMoment.format("MMM D, YYYY, hh:mm A");
  }

export { convertToMonthYear, formatDate };