import { BaseItem } from '@/types'
import { HeartIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function AddToFavorit(props : BaseItem) {
  return (
   <button className='text-primary'>
      <HeartIcon width={28} height={28} />
   </button>
  )
}
