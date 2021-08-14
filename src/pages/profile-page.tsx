import { withAuthRedirect } from '@hoc/withAuthRedirect';

const ProfilePage = () => {
  return (
    <div>
      Profile Page
    </div>
  )
}

export default withAuthRedirect(ProfilePage);