import { Outlet } from 'react-router-dom'
import ContainerUserIn from '../components/containers/ContainerUserIn'
import ContainerUserOut from '../components/containers/ContainerUserOut'
import '../styles/layouts.css'

export const LayoutAdmin = () => {
  return (
    <>
    <ContainerUserOut>
      <ContainerUserIn>
        <Outlet />
      </ContainerUserIn>
    </ContainerUserOut>
    </>
  )
}