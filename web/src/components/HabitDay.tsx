import * as Popover from '@radix-ui/react-popover';
//interface HabitDayProps {
  //  completed: number
//}

export function HabitDay() {
  
    return (
      <Popover.Root>
        <Popover.Trigger className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg" />
        <Popover.Content className='min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col' >
             resteeee

             <Popover.Arrow height={8} width={16} className='fill-zinc-900'/>
        </Popover.Content>
      </Popover.Root>
      
    )
}