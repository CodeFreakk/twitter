import './Toast.css'

export type ToastType = 'added' | 'require-like-retweet' | 'removed'

const toastConfig: Record<
  ToastType,
  { message: string; icon: string; nodeId: string }
> = {
  added: {
    message: 'Post added to your Bookmarks',
    icon: '/assets/toast-icon-success.svg',
    nodeId: '4344:17458',
  },
  'require-like-retweet': {
    message: 'You must like or retweet before you can save this to your Bookmarks',
    icon: '/assets/toast-icon-bookmark.svg',
    nodeId: '4345:17477',
  },
  removed: {
    message: 'Removed from Bookmarks — you unliked and undid your Retweet.',
    icon: '/assets/toast-icon-removed.svg',
    nodeId: '4346:17485',
  },
}

export default function Toast({ type }: { type: ToastType }) {
  const { message, icon, nodeId } = toastConfig[type]

  return (
    <div className="x-toast-layer">
      <div className="x-toast-overlay" aria-hidden="true" />
      <div className="x-toast-container" role="status" aria-live="polite">
        <div className="x-toast" data-node-id={nodeId}>
          <div className="x-toast__inner">
            <div className="x-toast__icon">
              <img src={icon} alt="" />
            </div>
            <p className="x-toast__message">{message}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
