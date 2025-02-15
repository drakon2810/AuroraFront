import { cn } from '@/lib/utils'
import { FC } from 'react'

export const Logo: FC<{ className?: string; size?: number }> = ({
  className,
  size = 240
}) => {
  return (
    <svg
      width={size}
      viewBox='0 0 1040 145'
      className={cn('fill-black dark:fill-white', className)}
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_44_42)'>
        <g filter='url(#filter0_d_44_42)'>
          <path
            d='M3 145L10.109 129.199M45.2358 51.1218L66.4327 4.00717C67.1368 2.44212 69.3555 2.43244 70.0733 3.99127L126.868 127.34M45.2358 51.1218L88.0851 143.839C88.4122 144.547 89.1208 145 89.9006 145H131.877C133.336 145 134.304 143.489 133.694 142.164L126.868 127.34M45.2358 51.1218L10.109 129.199M10.109 129.199L126.868 127.34'
            fill='none'
            stroke='currentColor'
            strokeWidth='5'
            shapeRendering='crispEdges'
          />
        </g>
        <g filter='url(#filter1_d_44_42)'>
          <path d='M193.331 144.6C190.664 143.567 189.864 141.733 190.931 139.1L214.731 80.5C215.731 78.3 217.298 77.2 219.431 77.2H219.631C221.798 77.3 223.264 78.4 224.031 80.5L248.231 139.1C249.298 141.733 248.531 143.567 245.931 144.6C243.298 145.633 241.464 144.867 240.431 142.3L235.031 129.2H203.881L198.731 142.3C197.698 144.9 195.898 145.667 193.331 144.6ZM207.181 120.8H231.581L219.131 90.5L207.181 120.8ZM300.032 145C292.399 145 286.749 143.183 283.082 139.55C279.449 135.883 277.632 130.233 277.632 122.6V81.4C277.632 80 277.982 78.95 278.682 78.25C279.382 77.55 280.432 77.2 281.832 77.2C283.232 77.2 284.282 77.55 284.982 78.25C285.682 78.95 286.032 80 286.032 81.4V122.6C286.032 126.167 286.449 128.967 287.282 131C288.149 133.033 289.599 134.483 291.632 135.35C293.666 136.183 296.466 136.6 300.032 136.6H312.032C315.599 136.6 318.399 136.183 320.432 135.35C322.466 134.483 323.899 133.033 324.732 131C325.599 128.967 326.032 126.167 326.032 122.6V81.4C326.032 80 326.382 78.95 327.082 78.25C327.782 77.55 328.832 77.2 330.232 77.2C331.632 77.2 332.682 77.55 333.382 78.25C334.082 78.95 334.432 80 334.432 81.4V122.6C334.432 130.233 332.616 135.883 328.982 139.55C325.349 143.183 319.699 145 312.032 145H300.032ZM413.295 145.2C412.195 145.9 411.145 146.117 410.145 145.85C409.145 145.583 408.295 144.9 407.595 143.8L392.095 118H378.095V140.8C378.095 143.6 376.695 145 373.895 145C371.095 145 369.695 143.6 369.695 140.8V81.4C369.695 78.6 371.095 77.2 373.895 77.2H397.295C403.395 77.2 408.062 78.8333 411.295 82.1C414.562 85.3333 416.195 90 416.195 96.1V99.1C416.195 104.4 414.962 108.633 412.495 111.8C410.028 114.933 406.462 116.883 401.795 117.65L414.895 139.5C416.162 141.833 415.628 143.733 413.295 145.2ZM378.095 109.6H397.295C401.095 109.6 403.795 108.8 405.395 107.2C406.995 105.6 407.795 102.9 407.795 99.1V96.1C407.795 92.3333 406.995 89.65 405.395 88.05C403.795 86.4167 401.095 85.6 397.295 85.6H378.095V109.6ZM467.195 145C459.562 145 453.912 143.183 450.245 139.55C446.612 135.883 444.795 130.233 444.795 122.6V99.5C444.795 91.8 446.628 86.15 450.295 82.55C453.962 78.9167 459.595 77.1333 467.195 77.2H479.195C486.862 77.2 492.512 79.0167 496.145 82.65C499.778 86.2833 501.595 91.9333 501.595 99.6V122.6C501.595 130.233 499.778 135.883 496.145 139.55C492.512 143.183 486.862 145 479.195 145H467.195ZM467.195 136.6H479.195C482.762 136.6 485.562 136.183 487.595 135.35C489.628 134.483 491.062 133.033 491.895 131C492.762 128.967 493.195 126.167 493.195 122.6V99.6C493.195 96.0667 492.762 93.2833 491.895 91.25C491.062 89.2167 489.628 87.7667 487.595 86.9C485.562 86.0333 482.762 85.6 479.195 85.6H467.195C463.662 85.5667 460.878 85.9667 458.845 86.8C456.812 87.6333 455.362 89.0667 454.495 91.1C453.628 93.1333 453.195 95.9333 453.195 99.5V122.6C453.195 126.167 453.612 128.967 454.445 131C455.312 133.033 456.762 134.483 458.795 135.35C460.828 136.183 463.628 136.6 467.195 136.6ZM578.549 145.2C577.449 145.9 576.399 146.117 575.399 145.85C574.399 145.583 573.549 144.9 572.849 143.8L557.349 118H543.349V140.8C543.349 143.6 541.949 145 539.149 145C536.349 145 534.949 143.6 534.949 140.8V81.4C534.949 78.6 536.349 77.2 539.149 77.2H562.549C568.649 77.2 573.315 78.8333 576.549 82.1C579.815 85.3333 581.449 90 581.449 96.1V99.1C581.449 104.4 580.215 108.633 577.749 111.8C575.282 114.933 571.715 116.883 567.049 117.65L580.149 139.5C581.415 141.833 580.882 143.733 578.549 145.2ZM543.349 109.6H562.549C566.349 109.6 569.049 108.8 570.649 107.2C572.249 105.6 573.049 102.9 573.049 99.1V96.1C573.049 92.3333 572.249 89.65 570.649 88.05C569.049 86.4167 566.349 85.6 562.549 85.6H543.349V109.6ZM609.249 144.6C606.582 143.567 605.782 141.733 606.849 139.1L630.649 80.5C631.649 78.3 633.215 77.2 635.349 77.2H635.549C637.715 77.3 639.182 78.4 639.949 80.5L664.149 139.1C665.215 141.733 664.449 143.567 661.849 144.6C659.215 145.633 657.382 144.867 656.349 142.3L650.949 129.2H619.799L614.649 142.3C613.615 144.9 611.815 145.667 609.249 144.6ZM623.099 120.8H647.499L635.049 90.5L623.099 120.8ZM698.25 145C695.45 145 694.05 143.6 694.05 140.8V81.4C694.05 78.6 695.45 77.2 698.25 77.2H724.35C729.65 77.2 733.717 78.6 736.55 81.4C739.417 84.2 740.85 88.2 740.85 93.4V96.1C740.85 100.6 739.434 104.083 736.6 106.55C741.9 109.517 744.55 114.933 744.55 122.8V126.2C744.55 132.333 742.917 137 739.65 140.2C736.417 143.4 731.75 145 725.65 145H698.25ZM702.45 136.6H725.65C729.417 136.6 732.1 135.8 733.7 134.2C735.334 132.567 736.15 129.9 736.15 126.2V122.8C736.15 119.1 735.367 116.467 733.8 114.9C732.234 113.3 729.517 112.5 725.65 112.5H702.45V136.6ZM702.45 104.1H726.15C728.584 104.1 730.234 103.35 731.1 101.85C732 100.35 732.45 98.4333 732.45 96.1V93.4C732.45 90.5 731.85 88.4833 730.65 87.35C729.45 86.1833 727.35 85.6 724.35 85.6H702.45V104.1ZM798.236 145C790.602 145 784.952 143.183 781.286 139.55C777.652 135.883 775.836 130.233 775.836 122.6V81.4C775.836 80 776.186 78.95 776.886 78.25C777.586 77.55 778.636 77.2 780.036 77.2C781.436 77.2 782.486 77.55 783.186 78.25C783.886 78.95 784.236 80 784.236 81.4V122.6C784.236 126.167 784.652 128.967 785.486 131C786.352 133.033 787.802 134.483 789.836 135.35C791.869 136.183 794.669 136.6 798.236 136.6H810.236C813.802 136.6 816.602 136.183 818.636 135.35C820.669 134.483 822.102 133.033 822.936 131C823.802 128.967 824.236 126.167 824.236 122.6V81.4C824.236 80 824.586 78.95 825.286 78.25C825.986 77.55 827.036 77.2 828.436 77.2C829.836 77.2 830.886 77.55 831.586 78.25C832.286 78.95 832.636 80 832.636 81.4V122.6C832.636 130.233 830.819 135.883 827.186 139.55C823.552 143.183 817.902 145 810.236 145H798.236ZM872.098 145C870.665 145 869.598 144.667 868.898 144C868.231 143.3 867.898 142.233 867.898 140.8V81.5C867.898 80.0333 868.231 78.9667 868.898 78.3C869.598 77.6333 870.665 77.3 872.098 77.3C873.565 77.3 874.631 77.6333 875.298 78.3C875.965 78.9667 876.298 80.0333 876.298 81.5V140.8C876.298 142.233 875.965 143.3 875.298 144C874.631 144.667 873.565 145 872.098 145ZM916.297 145C913.497 145 912.097 143.6 912.097 140.8V81.4C912.097 78.6 913.497 77.2 916.297 77.2C919.097 77.2 920.497 78.6 920.497 81.4V136.6H948.197C950.997 136.6 952.397 138 952.397 140.8C952.397 143.6 950.997 145 948.197 145H916.297ZM985.399 145C982.599 145 981.199 143.6 981.199 140.8V81.4C981.199 78.6 982.599 77.2 985.399 77.2H1009.5C1018.2 77.2 1024.6 79.2667 1028.7 83.4C1032.83 87.5 1034.9 93.9 1034.9 102.6V119.6C1034.9 128.3 1032.85 134.717 1028.75 138.85C1024.68 142.95 1018.27 145 1009.5 145H985.399ZM989.599 136.6H1009.5C1013.77 136.6 1017.13 136.083 1019.6 135.05C1022.1 133.983 1023.87 132.217 1024.9 129.75C1025.97 127.25 1026.5 123.867 1026.5 119.6V102.6C1026.5 98.3667 1025.97 95.0167 1024.9 92.55C1023.87 90.05 1022.1 88.2667 1019.6 87.2C1017.13 86.1333 1013.77 85.6 1009.5 85.6H989.599V136.6Z' />
        </g>
      </g>
      <defs>
        <filter
          id='filter0_d_44_42'
          x='-3.27979'
          y='0.327637'
          width='143.662'
          height='155.172'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='4' />
          <feGaussianBlur stdDeviation='2' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_44_42'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_44_42'
            result='shape'
          />
        </filter>
        <filter
          id='filter1_d_44_42'
          x='185.331'
          y='77.1001'
          width='853.568'
          height='77.1499'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='4' />
          <feGaussianBlur stdDeviation='2' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_44_42'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_44_42'
            result='shape'
          />
        </filter>
        <clipPath id='clip0_44_42'>
          <rect width='1040' height='145' />
        </clipPath>
      </defs>
    </svg>
  )
}

export const SmallLogo: FC<{ className?: string; size?: number }> = ({
  className,
  size = 46
}) => {
  return (
    <svg
      width={size}
      className={cn('stroke-black dark:stroke-white', className)}
      viewBox='0 0 273 307'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g filter='url(#filter0_d_44_46)'>
        <path
          d='M3 296L17.218 263.744M87.4716 104.359L131.662 4.10396C132.36 2.52034 134.604 2.51067 135.315 4.08822L250.737 259.949M87.4716 104.359L173.711 294.825C174.035 295.54 174.748 296 175.533 296H263.904C265.356 296 266.324 294.501 265.727 293.178L250.737 259.949M87.4716 104.359L17.218 263.744M17.218 263.744L250.737 259.949'
          fill='none'
          stroke-width='5'
          shape-rendering='crispEdges'
        />
      </g>
      <defs>
        <filter
          id='filter0_d_44_46'
          x='-3.2876'
          y='0.410645'
          width='275.696'
          height='306.089'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='4' />
          <feGaussianBlur stdDeviation='2' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_44_46'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_44_46'
            result='shape'
          />
        </filter>
      </defs>
    </svg>
  )
}

export const Customize: FC<{ className?: string; size?: number }> = ({
  className,
  size = 25
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      version='1.1'
      id='Capa_1'
      x='0px'
      y='0px'
      viewBox='0 0 100 100'
      xmlSpace='preserve'
      width={size}
      height={size}
      className={className}
    >
      <g>
        <path d='M62.924,94.729c-1.732-1.274-1.918-3.188-1.918-3.188l-0.65-4.155H39.642l-0.652,4.152c0,0-0.181,1.916-1.914,3.19   c-1.732,1.274-3.099,2.368-1.732,2.554c1.317,0.178,13.74,0.016,14.656,0c0.918,0.016,13.338,0.178,14.654,0   C66.02,97.098,64.652,96.006,62.924,94.729z' />
        <g>
          <path d='M26.666,61.538c5.534-0.043,6.223-1.377,8.027-6.933c3.327-8.768,18.309,2.296,9.024,6.136    C34.432,64.583,21.132,61.581,26.666,61.538z' />
          <path d='M83.41,3.756c-2.688-2.164-7.135-1.098-9.938,2.38L45.082,46.472c-2.803,3.477-2.789,2.813-0.104,4.975    c2.685,2.164,2.038,2.319,4.841-1.158l33.376-36.317C85.998,10.492,86.096,5.919,83.41,3.756z M76.109,8.584    c0,0-0.416-0.483-1.799-1.589c2.074-3.387,6.15-2.766,6.15-2.766C76.596,6.511,76.109,8.584,76.109,8.584z' />
        </g>
        <path d='M96,17.386H83.516l-5.515,6h16v48h-88v-48h51.19l4.227-6H4c-2.209,0-4,1.791-4,4v58c0,2.209,1.791,4,4,4h92   c2.209,0,4-1.791,4-4v-58C100,19.177,98.209,17.386,96,17.386z' />
      </g>
    </svg>
  )
}

export const Twitter: FC<{ className?: string; size?: number }> = ({
  className,
  size = 24
}) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      fill='currentColor'
      viewBox='0 0 24 24'
    >
      <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84'></path>
    </svg>
  )
}

export const Discord: FC<{ className?: string; size?: number }> = ({
  className,
  size = 24
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      className={className}
      width={size}
      height={size}
      viewBox='0 -28.5 256 256'
      version='1.1'
      preserveAspectRatio='xMidYMid'
    >
      <g>
        <path
          d='M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z'
          fill='#5865F2'
          fillRule='nonzero'
        ></path>
      </g>
    </svg>
  )
}

export const Telegram: FC<{ className?: string; size?: number }> = ({
  className,
  size = 24
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      viewBox='0 0 240.1 240.1'
      className={className}
      width={size}
      height={size}
    >
      <linearGradient
        id='Oval_1_'
        gradientUnits='userSpaceOnUse'
        x1='-838.041'
        y1='660.581'
        x2='-838.041'
        y2='660.3427'
        gradientTransform='matrix(1000 0 0 -1000 838161 660581)'
      >
        <stop offset='0' style={{ stopColor: '#2AABEE' }} />
        <stop offset='1' style={{ stopColor: '#229ED9' }} />
      </linearGradient>
      <circle
        fillRule='evenodd'
        clipRule='evenodd'
        fill='url(#Oval_1_)'
        cx='120.1'
        cy='120.1'
        r='120.1'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        fill='#FFFFFF'
        d='M54.3,118.8c35-15.2,58.3-25.3,70-30.2 c33.3-13.9,40.3-16.3,44.8-16.4c1,0,3.2,0.2,4.7,1.4c1.2,1,1.5,2.3,1.7,3.3s0.4,3.1,0.2,4.7c-1.8,19-9.6,65.1-13.6,86.3 c-1.7,9-5,12-8.2,12.3c-7,0.6-12.3-4.6-19-9c-10.6-6.9-16.5-11.2-26.8-18c-11.9-7.8-4.2-12.1,2.6-19.1c1.8-1.8,32.5-29.8,33.1-32.3 c0.1-0.3,0.1-1.5-0.6-2.1c-0.7-0.6-1.7-0.4-2.5-0.2c-1.1,0.2-17.9,11.4-50.6,33.5c-4.8,3.3-9.1,4.9-13,4.8 c-4.3-0.1-12.5-2.4-18.7-4.4c-7.5-2.4-13.5-3.7-13-7.9C45.7,123.3,48.7,121.1,54.3,118.8z'
      />
    </svg>
  )
}

export const Pumpfun: FC<{ className?: string; size?: number }> = ({
  className,
  size
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      version='1.0'
      className={className}
      width={size}
      viewBox='0 0 389 389'
      preserveAspectRatio='xMidYMid meet'
    >
      <g fill='#1c3934'>
        <path d='M108.5 384.9 c-41.1 -5.6 -76 -36 -89.3 -77.9 -11.1 -34.8 -4.5 -73.5 17.5 -102.7 6.5 -8.6 6.1 -8.3 45.8 -51.3 16.5 -17.9 41.9 -45.6 56.4 -61.4 33.5 -36.5 56.5 -59.7 66.1 -66.5 9.5 -6.7 22.1 -13.1 33 -16.7 7.9 -2.6 9.8 -2.8 28.5 -3.2 24.2 -0.5 32.1 1 48.1 8.8 28.9 14 50.3 39.5 60.1 71.5 2.7 8.7 2.8 9.7 2.7 31.5 -0.1 26.2 -1 31.3 -9.4 48.8 -7.5 15.7 -11.3 20.5 -49.9 62.2 -12.5 13.5 -36.2 39.4 -52.8 57.5 -35.7 39.2 -59 63.9 -69.4 73.3 -13.6 12.3 -28.9 20.3 -46.7 24.3 -10.3 2.3 -30.7 3.2 -40.7 1.8z m28.2 -19.4 c9 -1.7 19.8 -5.2 26 -8.3 6.3 -3.2 13 -8 13.7 -9.7 0.3 -0.8 1.2 -1.5 1.9 -1.5 1.6 0 28 -27.3 32.7 -33.7 1.6 -2.4 3.4 -4.3 3.9 -4.3 1.1 0 35.6 -36.7 35.6 -37.9 0 -0.5 -6.7 -7.3 -15 -15.2 -8.2 -7.8 -21.1 -20.1 -28.5 -27.3 -7.4 -7.1 -18.7 -18 -25 -24.1 -6.3 -6.1 -22.5 -21.6 -35.8 -34.5 -13.4 -12.9 -24.7 -23.6 -25.2 -23.8 -0.4 -0.2 -2 1.2 -3.5 3 -3 3.6 -8.9 9.8 -39.5 41.7 -22.8 23.7 -29.3 31.7 -34.3 42.4 -12.4 26.1 -11.9 54.9 1.5 82.7 7 14.5 14.3 23.7 25.8 32.3 7 5.3 7.9 5.9 17 10.6 16.1 8.3 32 10.8 48.7 7.6z m140.8 -126.4 c14 -15.3 33.2 -35.9 47.4 -50.9 8 -8.4 16.7 -18.4 19.2 -22.1 9.3 -13.7 14.6 -35.1 13.6 -54.1 -2.3 -40.8 -27.4 -72.8 -66.9 -85.2 -9.8 -3.1 -30.6 -3.3 -41.3 -0.4 -10.4 2.8 -23.5 8.7 -30.8 13.9 -7.1 5.1 -39.6 38.5 -73.6 75.9 l-5.4 6 7.4 7.1 c4.1 3.9 18.9 18.1 32.9 31.6 14 13.5 33.6 32.5 43.5 42.2 20.5 20.2 45.8 43.9 46.5 43.8 0.3 -0.1 3.7 -3.6 7.5 -7.8z' />
      </g>
      <g fill='#34815e'>
        <path d='M107.4 368.5 c-9.6 -1.7 -13.5 -3.1 -22.4 -7.6 -9.1 -4.7 -10 -5.3 -17 -10.6 -5.9 -4.4 -12.9 -11.4 -17.7 -17.8 -4.3 -5.7 -12 -21.8 -14.3 -30 -2.5 -8.9 -2.5 -10.5 0 -10.5 1.1 0 2 0.6 2 1.4 0 0.8 0.3 1.6 0.8 1.8 0.4 0.2 2.2 2.6 3.9 5.3 4.3 6.8 16.5 18.7 23.9 23.4 8.2 5.2 17.3 10.1 18.7 10.1 0.7 0 2.5 0.7 4.1 1.5 9.2 4.8 28.9 6.3 41.6 3.2 7.8 -1.9 17.4 -5.7 20.1 -8 1 -0.9 2.4 -1.7 2.9 -1.7 0.6 0 1 -0.4 1 -1 0 -0.5 0.7 -1 1.5 -1 0.8 0 1.5 -0.4 1.5 -1 0 -0.5 0.6 -1 1.3 -1 1.4 -0.1 11.8 -10.6 35.2 -35.5 8.8 -9.3 20.6 -21.7 26.2 -27.5 7.8 -8.1 10.2 -11.2 10.5 -13.6 0.3 -3.1 0.3 -3.1 13.3 9.1 l12.9 12.3 -11.9 12.9 c-6.6 7 -16.3 17.1 -21.5 22.3 -5.2 5.2 -10.2 10.6 -11.1 11.8 -3.3 4.8 -30.2 32.2 -31.6 32.2 -0.7 0 -1.6 0.7 -1.9 1.5 -0.4 0.8 -2.6 2.9 -5.1 4.5 -18.3 12.4 -44.4 17.6 -66.9 13.5z' />
      </g>
      <g fill='#5fca88'>
        <path d='M102.5 343.1 c-6.9 -1.2 -13.8 -3.1 -15.2 -4.3 -0.7 -0.6 -1.3 -0.7 -1.3 -0.3 0 0.4 -0.7 0.2 -1.5 -0.5 -0.8 -0.7 -1.5 -1 -1.5 -0.6 0 0.8 -11 -5.2 -19.4 -10.5 -7.4 -4.7 -19.6 -16.6 -23.9 -23.4 -1.7 -2.7 -3.5 -5.2 -3.9 -5.5 -0.4 -0.3 -1.4 -3 -2.1 -6 -4.8 -18.4 -2 -43.9 7 -62.7 5 -10.7 11.5 -18.7 34.3 -42.4 24.2 -25.3 35.1 -36.7 40.9 -43.1 l4.3 -4.8 2.7 2.1 c1.4 1.1 13.4 12.5 26.6 25.2 27.2 26.2 40.9 39.4 61 58.7 7.7 7.4 16.8 16.3 20.3 19.6 l6.4 6.2 -11.9 12.4 c-6.5 6.8 -19 20 -27.8 29.3 -23.7 25.2 -33.9 35.4 -35.2 35.5 -0.7 0 -1.3 0.5 -1.3 1 0 0.6 -0.7 1 -1.5 1 -0.8 0 -1.5 0.5 -1.5 1 0 0.6 -0.4 1 -1 1 -0.5 0 -1.9 0.8 -2.9 1.7 -2.6 2.2 -12.2 6.1 -19.6 7.9 -7.4 1.7 -25.2 2.6 -32 1.5z m-35.8 -68.8 c-0.2 -1.6 -0.4 -0.5 -0.4 2.2 0 2.8 0.2 4 0.4 2.8 0.2 -1.3 0.2 -3.5 0 -5z' />
      </g>
      <g fill='#bccfcd'>
        <path d='M79.1 319.5 c-2.2 -2.4 -4.1 -4.9 -4.1 -5.5 0 -2.1 4.7 -0.9 7.8 2 1.8 1.7 4 3 4.8 3 1.7 0 1.8 2.2 0.2 3.8 -2.2 2.2 -4.5 1.3 -8.7 -3.3z' />
        <path d='M66.7 296 l-1.8 -3 2.8 0 c3.7 0 5.6 1.3 5.1 3.6 -0.6 3.2 -4.1 2.8 -6.1 -0.6z' />
        <path d='M67 266.6 c0 -0.8 -0.7 -1.6 -1.6 -1.8 -1.3 -0.3 -1.3 -0.6 -0.1 -2.2 2.1 -2.8 5.7 -1.3 5.7 2.5 0 2.2 -0.5 2.9 -2 2.9 -1.1 0 -2 -0.6 -2 -1.4z' />
        <path d='M258.2 242.2 c-6.2 -5.9 -11.2 -11.1 -11.2 -11.7 0 -1 5.4 -6.8 17.3 -18.5 4.2 -4.2 7.7 -8.1 7.7 -8.7 0 -0.6 3.6 -4.3 8 -8.3 4.4 -4 8 -7.8 8 -8.5 0 -0.8 4.7 -5.8 10.5 -11.2 5.8 -5.4 10.5 -10.3 10.5 -10.8 0 -0.6 1.4 -2.4 3 -4 1.7 -1.6 3 -3.3 3 -3.8 0 -0.6 1.8 -3.3 3.9 -6.1 12.3 -15.9 18.8 -40.4 16.2 -60.7 -2.4 -18.5 -10.5 -36.9 -21.1 -47.7 -5.9 -6.1 -11.9 -11.2 -13.2 -11.2 -0.4 0 -0.8 -1.1 -0.8 -2.5 0 -1.4 0.2 -2.5 0.5 -2.5 1.7 0 13.3 6.1 20.1 10.6 18.4 12.1 31.4 31 37.6 54.3 2.9 11 3.6 31.8 1.4 44.4 -2.2 12.9 -6.8 25.4 -12.5 33.8 -2.5 3.7 -11.3 13.9 -19.6 22.6 -23.9 25.2 -27.4 28.9 -42.4 45.3 -7.9 8.5 -14.6 15.6 -14.9 15.7 -0.4 0.1 -5.8 -4.6 -12 -10.5z' />
        <path d='M73.4 248.2 c-2.6 -1.8 -2.2 -4.1 1.5 -8.1 2.1 -2.3 4.3 -4.1 5 -4.1 2 0 0.8 5.2 -1.4 6.4 -1.1 0.6 -2.2 1.2 -2.5 1.4 -0.2 0.2 0.2 0.7 1 1.2 1.1 0.7 1.1 1.1 0.1 2.4 -1.5 1.8 -2.1 1.9 -3.7 0.8z' />
      </g>
      <g fill='#ffffff'>
        <path d='M85.3 322.2 c-2.7 -0.4 -10.3 -6.9 -10.3 -8.8 0 -1.2 2.2 -2.4 4.4 -2.4 2.1 0 9.6 7 9.6 9 0 2.3 -0.8 2.7 -3.7 2.2z' />
        <path d='M68.8 296.8 c-3.7 -1.3 -5.2 -6.6 -5.2 -19.3 -0.1 -11 0.6 -15 2.9 -15.9 3.7 -1.4 4.3 0.2 3.9 9.4 -0.3 5.7 0.1 11.5 1.1 16.2 2.3 11.3 2.3 11.5 -2.7 9.6z' />
        <path d='M73.7 247.5 c-0.9 -0.9 -1.7 -2.2 -1.7 -3 0 -1.2 6.8 -8.5 8.1 -8.5 0.3 0 1.4 0.9 2.4 1.9 1.7 1.9 1.6 2.2 -2.7 6.7 -4.1 4.4 -4.5 4.5 -6.1 2.9z' />
        <path d='M226.7 212.2 c-12.2 -11.9 -27.6 -26.9 -34.2 -33.2 -15.4 -14.9 -39.6 -38.3 -50.4 -48.8 l-8.4 -8.1 7.3 -7.8 c4 -4.3 12.7 -13.6 19.3 -20.8 27.6 -29.8 49.4 -51.9 55.4 -56.2 11.8 -8.4 29.1 -14.6 45.4 -16.3 13.8 -1.3 35.3 1.9 42.3 6.5 1.2 0.8 2.6 1.5 3.1 1.7 0.6 0.2 0.9 0.6 0.8 1 -0.2 0.4 1.3 1.6 3.3 2.9 8.2 5.1 18.3 20.3 23.3 35.4 9.7 29.2 4.9 63.2 -12 85.1 -2.1 2.8 -3.9 5.5 -3.9 6.1 0 0.5 -1.3 2.2 -3 3.8 -1.6 1.5 -2.7 3.1 -2.5 3.5 0.2 0.4 -4.5 5.3 -10.6 10.9 -6 5.7 -10.7 10.6 -10.4 11.1 0.3 0.4 -3.3 4.3 -8 8.5 -4.7 4.3 -8.3 8.1 -8 8.5 0.3 0.4 -3.1 4 -7.5 8 -4.4 3.9 -7.9 7.5 -7.7 7.8 0.2 0.4 -2.3 3.2 -5.5 6.4 l-5.9 5.6 -22.2 -21.6z' />
      </g>
    </svg>
  )
}

export const Medium: FC<{ className?: string; size?: number }> = ({
  className,
  size = 24
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      width={size}
      height={size}
      viewBox='0 0 24 24'
      id='meteor-icon-kit__solid-medium'
      fill='none'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M24 0H0V24H24V0ZM5.52404 7.49981C5.67183 7.63301 5.7473 7.82863 5.72727 8.02655V15.1527C5.77112 15.4098 5.69009 15.6724 5.50899 15.8601L3.81538 17.9144V18.1853H8.61768V17.9144L6.92408 15.8601C6.74165 15.6727 6.6556 15.4118 6.69074 15.1527V8.98975L10.9059 18.1853H11.3952L15.0157 8.98975V16.3191C15.0157 16.5147 15.0157 16.5524 14.8878 16.6803L13.5856 17.9445V18.2154H19.9084V17.9445L18.6513 16.7104C18.5404 16.6258 18.4853 16.4868 18.5083 16.3492V7.28158C18.4853 7.14399 18.5404 7.00497 18.6513 6.92038L19.9385 5.68628V5.41538H15.4824L12.306 13.3392L8.69295 5.41538H4.01862V5.68628L5.52404 7.49981Z'
        fill='#758CA3'
      />
    </svg>
  )
}

export const Link: FC<{ className?: string; size?: number }> = ({
  className,
  size
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71' />
      <path d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71' />
    </svg>
  )
}

export const Solana: FC<{ className?: string; size?: number }> = ({
  className,
  size = 24
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      version='1.1'
      id='Layer_1'
      className={className}
      height={size}
      width={size}
      x='0px'
      y='0px'
      viewBox='0 0 397.7 311.7'
      style={{ background: 'new 0 0 397.7 311.7' }}
      xmlSpace='preserve'
    >
      <style type='text/css'>
        {`
        .st0 { fill: url(#SVGID_1_); }
        .st1 { fill: url(#SVGID_2_); }
        .st2 { fill: url(#SVGID_3_); }
      `}
      </style>
      <linearGradient
        id='SVGID_1_'
        gradientUnits='userSpaceOnUse'
        x1='360.8791'
        y1='351.4553'
        x2='141.213'
        y2='-69.2936'
        gradientTransform='matrix(1 0 0 -1 0 314)'
      >
        <stop offset='0' style={{ stopColor: '#00FFA3' }} />
        <stop offset='1' style={{ stopColor: '#DC1FFF' }} />
      </linearGradient>
      <path
        className='st0'
        d='M64.6,237.9c2.4-2.4,5.7-3.8,9.2-3.8h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5c-5.8,0-8.7-7-4.6-11.1L64.6,237.9z'
      />
      <linearGradient
        id='SVGID_2_'
        gradientUnits='userSpaceOnUse'
        x1='264.8291'
        y1='401.6014'
        x2='45.163'
        y2='-19.1475'
        gradientTransform='matrix(1 0 0 -1 0 314)'
      >
        <stop offset='0' style={{ stopColor: '#00FFA3' }} />
        <stop offset='1' style={{ stopColor: '#DC1FFF' }} />
      </linearGradient>
      <path
        className='st1'
        d='M64.6,3.8C67.1,1.4,70.4,0,73.8,0h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5c-5.8,0-8.7-7-4.6-11.1L64.6,3.8z'
      />
      <linearGradient
        id='SVGID_3_'
        gradientUnits='userSpaceOnUse'
        x1='312.5484'
        y1='376.688'
        x2='92.8822'
        y2='-44.061'
        gradientTransform='matrix(1 0 0 -1 0 314)'
      >
        <stop offset='0' style={{ stopColor: '#00FFA3' }} />
        <stop offset='1' style={{ stopColor: '#DC1FFF' }} />
      </linearGradient>
      <path
        className='st2'
        d='M333.1,120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8,0-8.7,7-4.6,11.1l62.7,62.7c2.4,2.4,5.7,3.8,9.2,3.8h317.4c5.8,0,8.7-7,4.6-11.1L333.1,120.1z'
      />
    </svg>
  )
}
