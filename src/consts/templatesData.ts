import ClassicBackground from '@/assets/images/backgrounds/classic.webp'
import SimpleBackground from '@/assets/images/backgrounds/simple.webp'
import Jupiter from '@/assets/images/jupiter.webp'
import Phantom from '@/assets/images/phantom.webp'
import Birdeye from '@/assets/images/socials/birdeye.webp'
import Coingecko from '@/assets/images/socials/coingecko.webp'
import Coinmarketcap from '@/assets/images/socials/coinmarketcap.webp'
import Default from '@/assets/images/socials/default.webp'
import Dexscreener from '@/assets/images/socials/dexscreener.webp'
import Dextools from '@/assets/images/socials/dextools.webp'
import Discord from '@/assets/images/socials/discord.webp'
import Instagram from '@/assets/images/socials/instagram.webp'
import Pumpfun from '@/assets/images/socials/pumpfun.webp'
import Telegram from '@/assets/images/socials/telegram.webp'
import Tiktok from '@/assets/images/socials/tiktok.webp'
import Twitter from '@/assets/images/socials/twitter.webp'
import Whitepaper from '@/assets/images/socials/whitepaper.webp'
import Solana from '@/assets/images/solana.webp'
import ClassicPreview from '@/assets/images/templates/classic.webp'
import ImpressivePreview from '@/assets/images/templates/impressive.webp'
import RocketPreview from '@/assets/images/templates/rocket.webp'
import SimplePreview from '@/assets/images/templates/simple.webp'
import { Templates } from '@/types/templates'

export const templatesData = {
  classic: {
    preview: ClassicPreview,
    price: 0.045,
    categories: [
      {
        label: 'text',
        fields: [
          {
            type: 'text',
            name: 'logoText',
            editor: true,
            defaultValues: { fontSizeValue: 40, color: '#ffffff' }
          },
          {
            type: 'text',
            name: 'ticker',
            editor: true,
            defaultValues: {
              fontSizeValue: 7.5,
              color: '#ffffff',
              sizeUnit: 'rem',
              styles: ['bold'],
              align: 'center',
              animation: 'heartBeat'
            }
          },
          {
            type: 'text',
            name: 'contractAddress',
            editor: true,
            defaultValues: {
              color: '#000'
            }
          },
          {
            type: 'text',
            name: 'description',
            editor: true,
            defaultValues: {
              color: '#000'
            }
          },
          {
            type: 'text',
            name: 'buyNowText',
            editor: true,
            defaultValues: {
              value: 'Buy Now',
              color: '#000',
              align: 'center',
              styles: ['bold']
            }
          }
        ]
      },
      {
        label: 'images',
        fields: [
          {
            type: 'image',
            name: 'logoImage',
            placeholder: 'URL',
            editor: true,
            defaultValues: {
              width: 90,
              height: 90,
              sizeUnit: 'px'
            }
          },
          {
            type: 'image',
            name: 'background',
            placeholder: 'URL',
            editor: true,
            defaultValues: {
              width: 100,
              height: 100,
              sizeUnit: '%',
              imagePlaceholder: ClassicBackground
            }
          },
          {
            type: 'image',
            name: 'tokenImage',
            placeholder: 'URL',
            editor: true,
            defaultValues: {
              width: 340,
              sizeUnit: 'px'
            }
          }
        ]
      },
      {
        label: 'links',
        fields: [
          {
            type: 'link',
            name: 'tiktok',
            placeholder: 'https://www.tiktok.com'
          },
          {
            type: 'link',
            name: 'instagram',
            placeholder: 'https://www.instagram.com'
          },
          {
            type: 'link',
            name: 'discord',
            placeholder: 'https://discord.com'
          },
          {
            type: 'link',
            name: 'telegram',
            placeholder: 'https://t.me'
          },
          {
            type: 'link',
            name: 'twitter',
            placeholder: 'https://twitter.com'
          },
          {
            type: 'link',
            name: 'dexscreener',
            placeholder: 'https://dexscreener.com'
          },
          {
            type: 'link',
            name: 'pumpfun',
            placeholder: 'https://pump.fun'
          },
          {
            type: 'link',
            name: 'coingecko',
            placeholder: 'https://www.coingecko.com'
          },
          {
            type: 'link',
            name: 'coinmarketcap',
            placeholder: 'https://coinmarketcap.com'
          },
          {
            type: 'link',
            name: 'birdeye',
            placeholder: 'https://www.birdeye.com'
          },
          {
            type: 'link',
            name: 'dextools',
            placeholder: 'https://www.dextools.io'
          },
          {
            type: 'link',
            name: 'whitepaper',
            placeholder: 'https://example.com/whitepaper'
          },
          {
            type: 'link',
            name: 'authorTelegram',
            placeholder: 'https://t.me',
            defaultValues: { visibility: 'header' }
          },
          {
            type: 'link',
            name: 'authorTwitter',
            placeholder: 'https://twitter.com',
            defaultValues: { visibility: 'header' }
          },
          {
            type: 'link',
            name: 'authorDiscord',
            placeholder: 'https://discord.com',
            defaultValues: { visibility: 'header' }
          }
        ]
      },
      {
        label: 'howToBuy',
        fields: [
          {
            type: 'toggle',
            name: 'showHowToBuy'
          },
          {
            type: 'text',
            name: 'firstStep',
            defaultValues: {
              value:
                'Mobile Users: Download the Phantom app for free. Desktop Users: Download the Phantom chrome extension.',
              color: '#000',
              fontSizeValue: 20,
              align: 'center'
            },
            editor: true
          },
          {
            type: 'image',
            name: 'firstStepImage',
            defaultValues: {
              width: 64,
              height: 64,
              imagePlaceholder: Phantom
            },
            editor: true
          },
          {
            type: 'text',
            name: 'secondStep',
            defaultValues: {
              value:
                'Fund your wallet with Solana, you can buy Solana from an exchange or cross chain swap and send it to your wallet.',
              color: '#000',
              fontSizeValue: 20,
              align: 'center'
            },
            editor: true
          },
          {
            type: 'image',
            name: 'secondStepImage',
            defaultValues: {
              width: 64,
              height: 64,
              imagePlaceholder: Solana
            },
            editor: true
          },
          {
            type: 'text',
            name: 'thirdStep',
            defaultValues: {
              value:
                'Go to Raydium or Jupiter and swap your Solana for $Ticker.',
              color: '#000',
              fontSizeValue: 20,
              align: 'center'
            },
            editor: true
          },
          {
            type: 'image',
            name: 'thirdStepImage',
            defaultValues: {
              width: 64,
              height: 64,
              imagePlaceholder: Jupiter
            },
            editor: true
          },
          {
            type: 'link',
            name: 'buyNowLink',
            placeholder: 'URL',
            defaultValues: { visibility: 'none' }
          }
        ]
      },

      {
        label: 'widgets',
        fields: [
          {
            type: 'widgets',
            name: 'Falling animation',
            placeholder: 'URL-'
          }
        ]
      }
    ]
  },
  simple: {
    preview: SimplePreview,
    price: 0.045,
    categories: [
      {
        label: 'text',
        fields: [
          {
            type: 'text',
            name: 'ticker',
            editor: true,
            defaultValues: {
              fontSizeValue: 6,
              color: '#ffffff',
              sizeUnit: 'rem',
              styles: ['bold'],
              align: 'center',
              animation: 'heartBeat'
            }
          },
          {
            type: 'text',
            name: 'contractAddress',
            editor: true,
            defaultValues: {
              color: '#000'
            }
          }
        ]
      },
      {
        label: 'images',
        fields: [
          {
            type: 'image',
            name: 'background',
            placeholder: 'URL',
            editor: true,
            defaultValues: {
              width: 100,
              height: 100,
              sizeUnit: '%',
              imagePlaceholder: SimpleBackground
            }
          },
          {
            type: 'image',
            name: 'tokenImage',
            placeholder: 'URL',
            editor: true,
            defaultValues: {
              width: 420,
              sizeUnit: 'px'
            }
          }
        ]
      },
      {
        label: 'links',
        fields: [
          {
            type: 'link',
            name: 'tiktok',
            placeholder: 'https://www.tiktok.com'
          },
          {
            type: 'link',
            name: 'instagram',
            placeholder: 'https://www.instagram.com'
          },
          {
            type: 'link',
            name: 'discord',
            placeholder: 'https://discord.com'
          },
          {
            type: 'link',
            name: 'telegram',
            placeholder: 'https://t.me'
          },
          {
            type: 'link',
            name: 'twitter',
            placeholder: 'https://twitter.com'
          },
          {
            type: 'link',
            name: 'dexscreener',
            placeholder: 'https://dexscreener.com'
          },
          {
            type: 'link',
            name: 'coingecko',
            placeholder: 'https://www.coingecko.com'
          },
          {
            type: 'link',
            name: 'coinmarketcap',
            placeholder: 'https://coinmarketcap.com'
          },
          {
            type: 'link',
            name: 'birdeye',
            placeholder: 'https://www.birdeye.com'
          },
          {
            type: 'link',
            name: 'dextools',
            placeholder: 'https://www.dextools.io'
          },
          {
            type: 'link',
            name: 'whitepaper',
            placeholder: 'https://example.com/whitepaper'
          },
          {
            type: 'link',
            name: 'authorTelegram',
            placeholder: 'https://t.me',
            defaultValues: { visibility: 'header' }
          },
          {
            type: 'link',
            name: 'authorTwitter',
            placeholder: 'https://twitter.com',
            defaultValues: { visibility: 'header' }
          },
          {
            type: 'link',
            name: 'authorDiscord',
            placeholder: 'https://discord.com',
            defaultValues: { visibility: 'header' }
          }
        ]
      },
      {
        label: 'widgets',
        fields: [
          {
            type: 'widgets',
            name: 'Falling animation',
            placeholder: 'URL-'
          }
        ]
      }
    ]
  },
  impressive: {
    preview: ImpressivePreview,
    price: 0.05,
    categories: [
      {
        label: 'text',
        fields: [
          {
            type: 'text',
            name: 'ticker',
            editor: true,
            defaultValues: {
              fontFamily: 'Dino',
              color: '#ffffff',
              fontSizeValue: 6,
              sizeUnit: 'rem',
              styles: ['bold'],
              align: 'center',
              animation: 'heartBeat',
              strokeWidth: 2,
              strokeColor: '#000'
            }
          },
          {
            type: 'text',
            name: 'contractAddress',
            editor: true,
            defaultValues: {
              color: '#000',
              fontSizeValue: 28
            }
          },
          {
            type: 'text',
            name: 'buyNowText',
            editor: true,
            defaultValues: {
              value: 'Buy',
              fontFamily: 'Dino',
              color: '#fff',
              fontSizeValue: 28,
              styles: ['bold']
            }
          },
          {
            type: 'text',
            name: 'aboutUsTitle',
            editor: true,
            defaultValues: {
              fontFamily: 'Dino',
              fontSizeValue: 72,
              color: '#000'
            }
          },
          {
            type: 'text',
            name: 'aboutUsDescription',
            editor: true,
            defaultValues: { fontSizeValue: 32, color: '#000' }
          }
        ]
      },
      {
        label: 'images',
        fields: [
          {
            type: 'image',
            name: 'logo',
            placeholder: 'URL',
            editor: true,
            defaultValues: {
              width: 102,
              height: 102,
              sizeUnit: 'px'
            }
          },
          {
            type: 'image',
            name: 'primaryBackground',
            placeholder: 'URL',
            editor: true,
            defaultValues: {
              src: 'https://img.freepik.com/premium-photo/orange-background-backgrounds-texture-weathered_53876-218333.jpg',
              slideshowItems: [
                'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F022%2F325%2F079%2Flarge_2x%2Fnature-wallpaper-background-nature-digital-painting-colorful-nature-ai-background-free-photo.jpg&f=1&nofb=1&ipt=44ae5060e26ab081d15d95175d711be57bc9e79c334f9749478e8f0bb6db2616&ipo=images'
              ],
              width: 100,
              height: 100,
              sizeUnit: '%'
            }
          },
          {
            type: 'image',
            name: 'secondaryBackground',
            placeholder: 'URL',
            editor: true,
            defaultValues: {
              src: 'https://www.knoxalliance.store/wp-content/uploads/2017/05/light-color-background-images-for-website-top-hd-images-for-free-background-for-website-in-light-color-1-1024x640.jpg',
              width: 100,
              height: 100,
              sizeUnit: '%'
            }
          },
          {
            type: 'image',
            name: 'tokenImage',
            placeholder: 'URL',
            editor: true,
            defaultValues: {
              width: 100,
              sizeUnit: '%'
            }
          },
          {
            type: 'image',
            name: 'aboutUsPreview',
            placeholder: 'URL',
            editor: true,
            defaultValues: {
              width: 100,
              sizeUnit: '%'
            }
          }
        ]
      },
      {
        label: 'links',
        fields: [
          {
            type: 'link',
            name: 'tiktok',
            placeholder: 'https://www.tiktok.com'
          },
          {
            type: 'link',
            name: 'instagram',
            placeholder: 'https://www.instagram.com'
          },
          {
            type: 'link',
            name: 'discord',
            placeholder: 'https://discord.com'
          },
          {
            type: 'link',
            name: 'telegram',
            placeholder: 'https://t.me'
          },
          {
            type: 'link',
            name: 'twitter',
            placeholder: 'https://twitter.com'
          },
          {
            type: 'link',
            name: 'dexscreener',
            placeholder: 'https://dexscreener.com'
          },
          {
            type: 'link',
            name: 'pumpfun',
            placeholder: 'https://pump.fun'
          },
          {
            type: 'link',
            name: 'coingecko',
            placeholder: 'https://www.coingecko.com'
          },
          {
            type: 'link',
            name: 'coinmarketcap',
            placeholder: 'https://coinmarketcap.com'
          },
          {
            type: 'link',
            name: 'birdeye',
            placeholder: 'https://www.birdeye.com'
          },
          {
            type: 'link',
            name: 'dextools',
            placeholder: 'https://www.dextools.io'
          },
          {
            type: 'link',
            name: 'whitepaper',
            placeholder: 'https://example.com/whitepaper'
          },
          {
            type: 'link',
            name: 'authorTelegram',
            placeholder: 'https://t.me',
            defaultValues: { visibility: 'header' }
          },
          {
            type: 'link',
            name: 'authorTwitter',
            placeholder: 'https://twitter.com',
            defaultValues: { visibility: 'header' }
          },
          {
            type: 'link',
            name: 'authorDiscord',
            placeholder: 'https://discord.com',
            defaultValues: { visibility: 'header' }
          }
        ]
      },
      {
        label: 'buttons',
        fields: [
          {
            type: 'link',
            name: 'buyNowLink',
            placeholder: 'URL',
            defaultValues: { visibility: 'none' }
          }
        ]
      },
      {
        label: 'roadmap',
        fields: [
          {
            type: 'text',
            name: 'roadmapTitle',
            defaultValues: {
              value: 'Roadmap',
              fontFamily: 'Dino',
              fontSizeValue: 72,
              color: '#000',
              align: 'center'
            }
          },
          {
            type: 'text',
            name: 'roadmapFirstStepTitle',
            defaultValues: {
              value: 'Phase 1',
              color: '#fff'
            }
          },
          {
            type: 'text',
            name: 'roadmapFirstStepDescription',
            defaultValues: {
              color: '#000'
            }
          },
          {
            type: 'text',
            name: 'roadmapSecondStepTitle',
            defaultValues: {
              value: 'Phase 2',
              color: '#fff'
            }
          },
          {
            type: 'text',
            name: 'roadmapSecondStepDescription',
            defaultValues: {
              color: '#000'
            }
          },
          {
            type: 'text',
            name: 'roadmapThirdStepTitle',
            defaultValues: {
              value: 'Phase 3',
              color: '#fff'
            }
          },
          {
            type: 'text',
            name: 'roadmapThirdStepDescription',
            defaultValues: {
              color: '#000'
            }
          }
        ]
      },
      {
        label: 'howToBuy',
        fields: [
          {
            type: 'text',
            name: 'howToBuyTitle',
            defaultValues: {
              value: 'How to Buy',
              fontFamily: 'Dino',
              fontSizeValue: 72,
              color: '#000',
              align: 'center'
            }
          },
          {
            type: 'text',
            name: 'howToBuyFirstStep',
            defaultValues: {
              value: 'Create any wallet of your choice, we recommend Phantom.',
              color: '#000',
              align: 'center'
            }
          },
          {
            type: 'text',
            name: 'howToBuySecondStep',
            defaultValues: {
              value:
                'Fund your wallet with Solana, you can buy Solana from an exchange.',
              color: '#000',
              align: 'center'
            }
          },
          {
            type: 'text',
            name: 'howToBuyThirdStep',
            defaultValues: {
              value:
                'Head to Jupiter & paste our Contract Address, and swap your Solana to our token.',
              color: '#000',
              align: 'center'
            }
          },
          {
            type: 'text',
            name: 'howToBuyFourthStep',
            defaultValues: {
              value: 'Welcome aboard degen!',
              color: '#000',
              align: 'center'
            }
          }
        ]
      },
      {
        label: 'faq',
        fields: [
          {
            type: 'text',
            name: 'FAQTitle',
            defaultValues: {
              value: 'FAQ',
              fontFamily: 'Dino',
              fontSizeValue: 72,
              color: '#000',
              align: 'center'
            }
          },
          {
            type: 'text',
            name: 'firstQuestion',
            defaultValues: {
              value: 'FIRST QUESTION',
              color: '#000'
            }
          },
          {
            type: 'text',
            name: 'firstAnswer',
            defaultValues: {
              value: 'FIRST ANSWER',
              color: '#000'
            }
          },
          {
            type: 'text',
            name: 'secondQuestion',
            defaultValues: {
              value: 'SECOND QUESTION',
              color: '#000'
            }
          },
          {
            type: 'text',
            name: 'secondAnswer',
            defaultValues: {
              value: 'SECOND ANSWER',
              color: '#000'
            }
          },
          {
            type: 'text',
            name: 'thirdQuestion',
            defaultValues: {
              value: 'THIRD QUESTION',
              color: '#000'
            }
          },
          {
            type: 'text',
            name: 'thirdAnswer',
            defaultValues: {
              value: 'THIRD ANSWER',
              color: '#000'
            }
          },
          {
            type: 'text',
            name: 'fourthQuestion',
            defaultValues: {
              value: 'FOURTH QUESTION',
              color: '#000'
            }
          },
          {
            type: 'text',
            name: 'fourthAnswer',
            defaultValues: {
              value: 'FOURTH ANSWER',
              color: '#000'
            }
          }
        ]
      },
      {
        label: 'widgets',
        fields: [
          {
            type: 'widgets',
            name: 'Falling animation',
            placeholder: 'URL-'
          }
        ]
      }
    ]
  },
  rocket: {
    preview: RocketPreview,
    price: 0.065,
    categories: [
      {
        label: 'accentColors',
        fields: [
          {
            type: 'color',
            name: 'primaryColor',
            defaultValues: {
              value: '#3B82F6'
            }
          },
          {
            type: 'color',
            name: 'secondaryColor',
            defaultValues: {
              value: '#c0bfbc'
            }
          }
        ]
      },
      {
        label: 'text',
        fields: [
          {
            type: 'text',
            name: 'heroTitle',
            editor: true,
            defaultValues: {
              value: 'Token name',
              fontSizeValue: 64,
              fontFamily: 'Orbitron',
              styles: ['bold']
            }
          },
          {
            type: 'text',
            name: 'ticker',
            editor: true,
            defaultValues: {
              value: 'Ticker',
              fontSizeValue: 28,
              fontFamily: 'Orbitron',
              color: '#c0bfbc'
            }
          },
          {
            type: 'text',
            name: 'description',
            editor: true,
            defaultValues: {
              value:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra, elit ac hendrerit fermentum, lorem quam blandit sapien, non finibus tortor est et urna. Etiam commodo iaculis convallis.',
              fontSizeValue: 16,
              color: '#c0bfbc'
            }
          },
          {
            type: 'text',
            name: 'contractAddress',
            editor: true,
            defaultValues: {
              fontSizeValue: 14
            }
          },
          {
            type: 'text',
            name: 'contractAddressLabel',
            editor: true,
            defaultValues: {
              value: 'Contract Address',
              fontSizeValue: 14,
              fontFamily: 'Orbitron',
              color: '#c0bfbc'
            }
          },
          {
            type: 'text',
            name: 'projectName',
            editor: true,
            defaultValues: {
              value: 'Name',
              fontSizeValue: 80,
              color: '#000',
              styles: ['bold']
            }
          },
          {
            type: 'text',
            name: 'buyTicker',
            editor: true,
            defaultValues: {
              value: 'Buy Ticker',
              fontFamily: 'Orbitron',
              fontSizeValue: 16,
              color: '#fff'
            }
          },
          {
            type: 'text',
            name: 'buyNow',
            editor: true,
            defaultValues: {
              value: 'Buy now',
              fontFamily: 'Orbitron',
              fontSizeValue: 18,
              color: '#fff'
            }
          },
          {
            type: 'text',
            name: 'joinUs',
            editor: true,
            defaultValues: {
              value: 'Join Us',
              fontFamily: 'Orbitron',
              fontSizeValue: 18,
              color: '#fff'
            }
          },
          {
            type: 'text',
            name: 'tokenomicsTitle',
            editor: true,
            defaultValues: {
              value: 'Tokenomics',
              fontFamily: 'Orbitron',
              fontSizeValue: 48
            }
          },
          {
            type: 'text',
            name: 'missionTimelineTitle',
            defaultValues: {
              value: 'Mission Timeline',
              fontFamily: 'Orbitron',
              fontSizeValue: 48
            },
            editor: true
          },
          {
            type: 'text',
            name: 'missionControlTitle',
            defaultValues: {
              value: 'Mission Control',
              fontFamily: 'Orbitron',
              fontSizeValue: 48
            },
            editor: true
          },
          {
            type: 'text',
            name: 'FAQTitle',
            defaultValues: {
              value: 'Mission FAQ',
              fontFamily: 'Orbitron',
              fontSizeValue: 48
            },
            editor: true
          },
          {
            type: 'text',
            name: 'joinTitle',
            defaultValues: {
              value: 'Join The Mission',
              fontFamily: 'Orbitron',
              fontSizeValue: 48
            },
            editor: true
          }
        ]
      },
      {
        label: 'images',
        fields: [
          {
            type: 'image',
            name: 'tokenImage',
            placeholder: 'URL',
            editor: true,
            defaultValues: {
              width: 100,
              height: 100,
              sizeUnit: '%'
            }
          }
        ]
      },
      {
        label: 'buttons',
        fields: [
          {
            type: 'link',
            name: 'buyTickerLink',
            placeholder: 'URL'
          },
          {
            type: 'link',
            name: 'buyNowLink',
            placeholder: 'URL',
            defaultValues: { visibility: 'none' }
          },
          {
            type: 'link',
            name: 'joinUsLink',
            placeholder: 'URL'
          }
        ]
      },
      {
        label: 'tokenomics',
        fields: [
          {
            type: 'text',
            name: 'firstTokenomicsIcon',
            defaultValues: { value: '💰', fontSizeValue: 40 }
          },
          {
            type: 'text',
            name: 'firstTokenomicsTitle',
            defaultValues: {
              value: 'Total Supply',
              fontSizeValue: 20,
              fontFamily: 'Orbitron'
            }
          },
          {
            type: 'text',
            name: 'firstTokenomicsValue',
            defaultValues: {
              value: '1000000000',
              fontSizeValue: 32,
              fontFamily: 'Orbitron'
            }
          },
          {
            type: 'text',
            name: 'secondTokenomicsIcon',
            defaultValues: { value: '📈', fontSizeValue: 40 }
          },
          {
            type: 'text',
            name: 'secondTokenomicsTitle',
            defaultValues: {
              value: 'Buy Tax',
              fontSizeValue: 20,
              fontFamily: 'Orbitron'
            }
          },
          {
            type: 'text',
            name: 'secondTokenomicsValue',
            defaultValues: {
              value: '5%',
              fontSizeValue: 32,
              fontFamily: 'Orbitron'
            }
          },
          {
            type: 'text',
            name: 'thirdTokenomicsIcon',
            defaultValues: { value: '📉', fontSizeValue: 40 }
          },
          {
            type: 'text',
            name: 'thirdTokenomicsTitle',
            defaultValues: {
              value: 'Sell Tax',
              fontSizeValue: 20,
              fontFamily: 'Orbitron'
            }
          },
          {
            type: 'text',
            name: 'thirdTokenomicsValue',
            defaultValues: {
              value: '5%',
              fontSizeValue: 32,
              fontFamily: 'Orbitron'
            }
          },
          {
            type: 'text',
            name: 'fourthTokenomicsIcon',
            defaultValues: { value: '🔒', fontSizeValue: 40 }
          },
          {
            type: 'text',
            name: 'fourthTokenomicsTitle',
            defaultValues: {
              value: 'LP Lock',
              fontSizeValue: 20,
              fontFamily: 'Orbitron'
            }
          },
          {
            type: 'text',
            name: 'fourthTokenomicsValue',
            defaultValues: {
              value: '2 Years',
              fontSizeValue: 32,
              fontFamily: 'Orbitron'
            }
          }
        ]
      },
      {
        label: 'missionTimeline',
        fields: [
          {
            type: 'text',
            name: 'firstTimelinePhaseTitle',
            defaultValues: {
              value: 'Phase 1',
              color: '#fff',
              fontSizeValue: 14,
              fontFamily: 'Orbitron'
            },
            editor: true
          },
          {
            type: 'text',
            name: 'firstTimelineTitle',
            defaultValues: {
              value: 'Concept & Vision',
              color: '#fff',
              fontFamily: 'Orbitron'
            },
            editor: true
          },
          {
            type: 'text',
            name: 'firstTimelineDescription',
            defaultValues: {
              value:
                'Define your big idea and lay out the foundation for your project. Set clear goals and build excitement around what’s coming next. 🚀',
              color: '#c0bfbc',
              fontSizeValue: 16
            },
            editor: true
          },
          {
            type: 'text',
            name: 'firstTimelineDate',
            defaultValues: {
              value: 'Q1 2024',
              fontSizeValue: 14,
              fontFamily: 'Orbitron'
            },
            editor: true
          },
          {
            type: 'text',
            name: 'secondTimelinePhaseTitle',
            defaultValues: {
              value: 'Phase 2',
              color: '#fff',
              fontSizeValue: 14,
              fontFamily: 'Orbitron'
            },
            editor: true
          },
          {
            type: 'text',
            name: 'secondTimelineTitle',
            defaultValues: {
              value: 'Build & Launch',
              color: '#fff',
              fontFamily: 'Orbitron'
            },
            editor: true
          },
          {
            type: 'text',
            name: 'secondTimelineDescription',
            defaultValues: {
              value:
                'Start creating! Focus on getting your product, service, or community up and running. This is where things start to come to life. 🌟',
              color: '#c0bfbc',
              fontSizeValue: 16
            },
            editor: true
          },
          {
            type: 'text',
            name: 'secondTimelineDate',
            defaultValues: {
              value: 'Q2 2025',
              fontSizeValue: 14,
              fontFamily: 'Orbitron'
            },
            editor: true
          },
          {
            type: 'text',
            name: 'thirdTimelinePhaseTitle',
            defaultValues: {
              value: 'Phase 3',
              color: '#fff',
              fontSizeValue: 14,
              fontFamily: 'Orbitron'
            },
            editor: true
          },
          {
            type: 'text',
            name: 'thirdTimelineTitle',
            defaultValues: {
              value: 'Build & Launch',
              color: '#fff',
              fontFamily: 'Orbitron'
            },
            editor: true
          },
          {
            type: 'text',
            name: 'thirdTimelineDescription',
            defaultValues: {
              value:
                'Start creating! Focus on getting your product, service, or community up and running. This is where things start to come to life. 🌟',
              color: '#c0bfbc',
              fontSizeValue: 16
            },
            editor: true
          },
          {
            type: 'text',
            name: 'thirdTimelineDate',
            defaultValues: {
              value: 'Q2 2025',
              fontSizeValue: 14,
              fontFamily: 'Orbitron'
            },
            editor: true
          }
        ]
      },
      {
        label: 'missionControl',
        fields: [
          {
            type: 'image',
            name: 'firstControlAvatar',
            defaultValues: { width: 120 },
            editor: true
          },
          {
            type: 'text',
            name: 'firstControlName',
            defaultValues: {
              value: 'Meme Lord',
              color: '#fff',
              fontSizeValue: 20,
              fontFamily: 'Orbitron'
            },
            editor: true
          },
          {
            type: 'text',
            name: 'firstControlJob',
            defaultValues: {
              value: 'Platform Architect',
              fontFamily: 'Orbitron',
              fontSizeValue: 16
            },
            editor: true
          },
          {
            type: 'image',
            name: 'secondControlAvatar',
            defaultValues: { width: 120 },
            editor: true
          },
          {
            type: 'text',
            name: 'secondControlName',
            defaultValues: {
              value: 'Degen Dev',
              color: '#fff',
              fontSizeValue: 20,
              fontFamily: 'Orbitron'
            },
            editor: true
          },
          {
            type: 'text',
            name: 'secondControlJob',
            defaultValues: {
              value: 'Smart Contract Wizard',
              fontFamily: 'Orbitron',
              fontSizeValue: 16
            },
            editor: true
          },
          {
            type: 'image',
            name: 'thirdControlAvatar',
            defaultValues: { width: 120 },
            editor: true
          },
          {
            type: 'text',
            name: 'thirdControlName',
            defaultValues: {
              value: 'Ser Launch',
              color: '#fff',
              fontSizeValue: 20,
              fontFamily: 'Orbitron'
            },
            editor: true
          },
          {
            type: 'text',
            name: 'thirdControlJob',
            defaultValues: {
              value: 'Community Lead',
              fontFamily: 'Orbitron',
              fontSizeValue: 16
            },
            editor: true
          }
        ]
      },
      {
        label: 'faq',
        fields: [
          {
            type: 'text',
            name: 'firstQuestion',
            defaultValues: {
              value: 'What is AURORA? 🚀',
              fontSizeValue: 20,
              fontFamily: 'Orbitron'
            },
            editor: true
          },
          {
            type: 'text',
            name: 'firstAnswer',
            defaultValues: {
              value:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porttitor eget nunc vel rutrum. Nullam efficitur metus a nibh ullamcorper suscipit. Nullam eget aliquam turpis, sed aliquet orci. Nulla sit amet nisl in lectus dapibus fringilla vitae id turpis.',
              fontSizeValue: 16,
              color: '#c0bfbc'
            },
            editor: true
          },
          {
            type: 'text',
            name: 'secondQuestion',
            defaultValues: {
              value: 'Why AURORA? 🌟',
              fontSizeValue: 20,
              fontFamily: 'Orbitron'
            },
            editor: true
          },
          {
            type: 'text',
            name: 'secondAnswer',
            defaultValues: {
              value:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porttitor eget nunc vel rutrum. Nullam efficitur metus a nibh ullamcorper suscipit. Nullam eget aliquam turpis, sed aliquet orci. Nulla sit amet nisl in lectus dapibus fringilla vitae id turpis.',
              fontSizeValue: 16,
              color: '#c0bfbc'
            },
            editor: true
          },
          {
            type: 'text',
            name: 'thirdQuestion',
            defaultValues: {
              value: 'How does it work? ⚡',
              fontSizeValue: 20,
              fontFamily: 'Orbitron'
            },
            editor: true
          },
          {
            type: 'text',
            name: 'thirdAnswer',
            defaultValues: {
              value:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porttitor eget nunc vel rutrum. Nullam efficitur metus a nibh ullamcorper suscipit. Nullam eget aliquam turpis, sed aliquet orci. Nulla sit amet nisl in lectus dapibus fringilla vitae id turpis.',
              fontSizeValue: 16,
              color: '#c0bfbc'
            },
            editor: true
          },
          {
            type: 'text',
            name: 'fourthQuestion',
            defaultValues: {
              value: 'How does it work? ⚡',
              fontSizeValue: 20,
              fontFamily: 'Orbitron'
            },
            editor: true
          },
          {
            type: 'text',
            name: 'fourthAnswer',
            defaultValues: {
              value:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porttitor eget nunc vel rutrum. Nullam efficitur metus a nibh ullamcorper suscipit. Nullam eget aliquam turpis, sed aliquet orci. Nulla sit amet nisl in lectus dapibus fringilla vitae id turpis.',
              fontSizeValue: 16,
              color: '#c0bfbc'
            },
            editor: true
          }
        ]
      },
      {
        label: 'links',
        fields: [
          {
            type: 'link',
            name: 'joinTelegram',
            editor: true,
            placeholder: 'URL'
          },
          {
            type: 'link',
            name: 'joinTwitter',
            editor: true,
            placeholder: 'URL'
          },
          {
            type: 'link',
            name: 'joinDiscord',
            editor: true,
            placeholder: 'URL'
          }
        ]
      },
      {
        label: 'widgets',
        fields: [
          {
            type: 'widgets',
            name: 'Falling animation',
            placeholder: 'URL-'
          }
        ]
      }
    ]
  }
} as const satisfies Templates

export const templateSocialIcons = {
  telegram: Telegram,
  discord: Discord,
  twitter: Twitter,
  instagram: Instagram,
  tiktok: Tiktok,
  whitepaper: Whitepaper,
  coingecko: Coingecko,
  coinmarketcap: Coinmarketcap,
  dexscreener: Dexscreener,
  dextools: Dextools,
  pumpfun: Pumpfun,
  birdeye: Birdeye,
  authorTwitter: Twitter,
  authorTelegram: Telegram,
  authorDiscord: Discord,
  default: Default
}
