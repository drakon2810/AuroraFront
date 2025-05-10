import { useChartStore } from '@/store/useChartStore'
import React, { useEffect, useState } from 'react'

// Предопределенные контракты по умолчанию для каждой сети
const DEFAULT_CONTRACTS: Record<string, string> = {
  solana: 'Czfq3xZZDmsdGdUyrNLtRhGc47cXcZtLG4crryfu44zE',
  sui: '0xdba34672e30cb065b1f93e3ab55318768fd6fef66c15942c9f7cb846e2f900e7::usdc::USDC',
  base: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
  bnb: '0x55d398326f99059ff775485246999027b3197955'
}

// Маппинг сетей для DexTools/DexScreener
const NETWORK_MAPPING: Record<string, string> = {
  bnb: 'bsc' // Преобразуем bnb → bsc
}

export const Chart: React.FC = () => {
  const { optionChat, contractChart, toggleVariantChart, toggleThemeChart } =
    useChartStore((state) => state)
  const [chartSrc, setChartSrc] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadChart = async () => {
      try {
        setIsLoading(true)
        setError(null)

        const selectedNetwork = optionChat || 'solana'
        let contractAddress =
          contractChart || DEFAULT_CONTRACTS[selectedNetwork.toLowerCase()]

        if (!contractAddress) {
          throw new Error('Contract address not found for the selected network')
        }

        // Нормализуем название сети (bnb → bsc)
        let network = selectedNetwork.toLowerCase()
        network = NETWORK_MAPPING[network] || network

        // Подставляем нужные контракты для Dextools
        if (toggleVariantChart === 'dextools') {
          if (network === 'base') {
            contractAddress = '0xa41bc0affba7fd420d186b84899d7ab2ac57fcd1'
          } else if (network === 'bsc') {
            contractAddress = '0xbe60d4c4250438344bec816ec2dec99925deb4c7'
          }
        }

        if (toggleVariantChart === 'dextools') {
          setChartSrc(
            `https://www.dextools.io/widget-chart/ru/${network}/pe-light/${contractAddress}?theme=${toggleThemeChart}&chartType=2&chartResolution=30&drawingToolbars=false`
          )
        } else {
          setChartSrc(
            `https://dexscreener.com/${network}/${contractAddress}?embed=1&theme=${toggleThemeChart}&trades=0&info=0&chart=1&toolbar=0`
          )
        }
      } catch (err) {
        console.error('Failed to load chart:', err)
        setError(
          'Failed to load chart. Please try another network or contract.'
        )
      } finally {
        setIsLoading(false)
      }
    }

    loadChart()
  }, [optionChat, contractChart, toggleVariantChart, toggleThemeChart])

  return (
    <div className='relative h-[500px] w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800'>
      {isLoading ? (
        <div className='flex h-full items-center justify-center'>
          <p className='text-gray-500 dark:text-gray-400'>Loading chart...</p>
        </div>
      ) : error ? (
        <div className='flex h-full flex-col items-center justify-center p-4 text-center'>
          <p className='mb-2 text-red-500'>{error}</p>
          <p className='text-sm text-gray-500 dark:text-gray-400'>
            Try switching to DexScreener or another network
          </p>
        </div>
      ) : chartSrc ? (
        <iframe
          id='dex-chart-iframe'
          title='DEX Chart'
          width='100%'
          height='100%'
          src={chartSrc}
          style={{ border: 'none' }}
          allow='clipboard-write'
          referrerPolicy='no-referrer'
          sandbox='allow-scripts allow-same-origin'
          allowFullScreen
          onError={() =>
            setError('Failed to load chart. The network may not be supported.')
          }
        />
      ) : (
        <div className='flex h-full items-center justify-center'>
          <p className='text-gray-500 dark:text-gray-400'>
            {optionChat
              ? 'Loading chart...'
              : 'Select a network to display chart'}
          </p>
        </div>
      )}
    </div>
  )
}
