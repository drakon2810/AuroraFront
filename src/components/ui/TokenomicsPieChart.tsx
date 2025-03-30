import { useTokenDistributionStore } from '@/store/useTokenDistribution'
import { PieChart, Pie, Cell, Tooltip } from 'recharts'

export const TokenomicsPieChart = () => {
  const { itemsDes } = useTokenDistributionStore()

  const total = itemsDes.reduce((sum, item) => sum + Number(item.value1), 0)
  const data = itemsDes.map((item) => ({
    name: item.value2 || 'Unnamed',
    value: Number(item.value1),
    color: item.color
  }))

  return (
    <div className='flex flex-col items-center'>
      {total > 100 && (
        <p className='mb-2 font-semibold text-red-500'>
          Total exceeds 100%! Adjust values.
        </p>
      )}
      <div className='flex items-center'>
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            dataKey='value'
            nameKey='name'
            cx='50%'
            cy='50%'
            outerRadius={140}
            fill='#8884d8'
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
        <div className='ml-4'>
          {data.map((entry, index) => (
            <div key={index} className='mb-2 flex items-center'>
              <div
                className='mr-2 h-4 w-4'
                style={{ backgroundColor: entry.color }}
              ></div>
              <span className='text-sm'>{`${entry.name}: ${entry.value}%`}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
