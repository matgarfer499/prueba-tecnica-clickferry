import { Datepicker } from '@mobiscroll/react'
import '@mobiscroll/react/dist/css/mobiscroll.min.css'

function Calendar({ emptyDates }) {
    return (
        <div className='mt-12 w-2/4 m-auto shadow-xl'>
            <Datepicker
                controls={['calendar']}
                display='inline'
                calendarType='month'
                theme='ios'
                themeVariant='light'
                pages={2}
                invalid={emptyDates}
            />
        </div>
    );
}

export default Calendar;
