import { redirect } from 'next/navigation'

/** Online shop is paused — bookings only for now. */
export default function ShopPage() {
  redirect('/businesses/food/catering')
}
