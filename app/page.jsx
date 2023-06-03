'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const FlagShader = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.FlagShader), { ssr: false })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

export default function Page() {
  return (
    <div className='p-5'>
      <div className='flex min-h-fit w-full items-center'>
        <div className='w-1/5'>Flag shader</div>
        <div className='w-4/5'>
          <View orbit className='flex h-96 w-full flex-col items-center justify-center'>
            <Suspense fallback={null}>
              <FlagShader scale={3} />
              <Common />
            </Suspense>
          </View>
        </div>
      </div>
    </div>
  )
}
