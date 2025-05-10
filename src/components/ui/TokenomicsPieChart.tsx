import { useTokenDistributionStore } from '@/store/useTokenDistribution'
import { PieChart, Pie, Cell, Tooltip } from 'recharts'

export const TokenomicsPieChart = () => {
  const { itemsDes } = useTokenDistributionStore()

  const total = itemsDes.reduce((sum, item) => sum + Number(item.value1), 0)
  const data = itemsDes.map((item) => ({
    name: item.value2 || 'Unnamed',
    value: Number(item.value1),
    color: item.color,
    displayValue: `${Number(item.value1)}%`
  }))

  const renderLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    index
  }: any) => {
    const RADIAN = Math.PI / 180
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <text
        x={x}
        y={y}
        fill='white'
        textAnchor='middle'
        dominantBaseline='central'
        style={{
          fontSize: '24px', // Увеличенный размер только для чисел внутри
          fontWeight: 'bold',
          pointerEvents: 'none'
        }}
      >
        {data[index].displayValue}
      </text>
    )
  }

  return (
    <div className='flex flex-col items-center'>
      {total > 100 && (
        <p className='mb-4 text-lg font-semibold text-red-500'>
          Total exceeds 100%! Adjust values.
        </p>
      )}
      <div className='flex items-center'>
        <PieChart width={500} height={500}>
          <Pie
            data={data}
            dataKey='value'
            nameKey='name'
            cx='50%'
            cy='50%'
            outerRadius={200}
            innerRadius={0}
            label={renderLabel}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value, name) => [`${value}%`, name]} />
        </PieChart>
        <div className='ml-8'>
          {data.map((entry, index) => (
            <div key={index} className='mb-4 flex items-center'>
              <div
                className='mr-3 h-6 w-6 rounded-md'
                style={{ backgroundColor: entry.color }}
              ></div>
              <span className='text-lg'>{`${entry.name}`}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
