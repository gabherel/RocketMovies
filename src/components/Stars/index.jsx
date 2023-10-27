import { FiStar } from 'react-icons/fi'

import { Star } from './styles'

export function StarsIcon() {
  return (
    <Star>
      <div >
        <FiStar /> <FiStar /> <FiStar /> <FiStar /> <FiStar className='last'/>
      </div>
    </Star>
  )
}