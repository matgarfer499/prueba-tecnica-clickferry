import { Datepicker } from '@mobiscroll/react'
import '@mobiscroll/react/dist/css/mobiscroll.min.css'

function Calendar({ dates }) {
    return (
        <div className='mt-12 w-2/4 m-auto shadow-xl'>
            <Datepicker
                controls={['calendar']}
                display='inline'
                calendarType='month'
                theme='ios'
                themeVariant='light'
                pages={2}
                valid={dates}
            />
        </div>
    );
}

export default Calendar;
