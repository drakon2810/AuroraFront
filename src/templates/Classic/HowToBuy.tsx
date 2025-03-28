import { TemplateItemError } from '@/components/TemplateItems/Error'
import { ImageIcons } from '@/components/TemplateItems/ImageIcon'
import { Text } from '@/components/TemplateItems/Text'
import { TemplateContext } from '@/contexts/TemplateContext'
import { useBlocksStore } from '@/store/useBlocksStore'
import { useStylesStore } from '@/store/useStulesStore'
import { TemplateContextValues } from '@/types/contexts'
import { FC, useContext } from 'react'

export const ClassicHowToBuy: FC = () => {
  const { data } = useContext(TemplateContext) as TemplateContextValues
  const { titleHowToBuy, selectedNetwork, colorBackgrond } = useBlocksStore(
    (state) => state
  )

  const { secondary, colorSec, primary, colorPrim } = useStylesStore(
    (state) => state
  )

  if (!data) return <TemplateItemError />

  const getTextField = (name: string) => {
    switch (selectedNetwork) {
      case 'Custom':
        return `${name}Step`
      case 'Solana':
        return `${name}Solana`
      case 'Sui':
        return `${name}Sui`
      case 'Base':
        return `${name}Base`
      case 'BNB Chain':
        return `${name}Bnb`
      default:
        return `${name}Step`
    }
  }

  const getImageField = (name: string) => {
    switch (selectedNetwork) {
      case 'Custom':
        return `${name}StepImage`
      case 'Solana':
        return `${name}SolanaImage`
      case 'Sui':
        return `${name}SuiImage`
      case 'Base':
        return `${name}BaseImage`
      case 'BNB Chain':
        return `${name}BnbImage`
      default:
        return `${name}SolanaImage`
    }
  }

  return (
    <div className='flex flex-col items-center gap-4 pt-16'>
      <h2
        className='tracking-wide text-white'
        style={{ fontFamily: primary, color: colorPrim }}
      >
        {titleHowToBuy || 'How to Buy'}
      </h2>
      <div className='flex flex-wrap justify-center gap-4'>
        {['first', 'second', 'third'].map((name) => (
          <div
            key={name}
            className='flex w-72 flex-col items-center justify-between gap-8 rounded-xl bg-white p-6 text-black'
            style={{ backgroundColor: colorBackgrond }}
          >
            <div className='flex flex-col items-center gap-2'>
              <h3
                className='text-3xl'
                style={{ fontFamily: secondary, color: colorSec }}
              >
                <Text
                  fieldName={`${name}NameStep`}
                  as='p'
                  style={{
                    fontFamily: secondary,
                    color: colorSec,
                    wordBreak: 'break-word',
                    whiteSpace: 'pre-wrap',
                    overflowWrap: 'break-word',
                    maxWidth: '100%'
                  }}
                />
              </h3>
              <Text
                fieldName={getTextField(name)}
                as='p'
                style={{
                  fontFamily: secondary,
                  color: colorSec,
                  wordBreak: 'break-word',
                  whiteSpace: 'pre-wrap',
                  overflowWrap: 'break-word',
                  maxWidth: '100%'
                }}
              />
            </div>
            <div className='flex flex-row justify-start gap-4'>
              <ImageIcons
                fieldName={getImageField(name)}
                className={{ image: 'rounded-xl' }}
                isIconStep={true}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
