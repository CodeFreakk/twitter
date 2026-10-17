import { useEffect, useRef, useState } from 'react'
import Toast, { type ToastType } from './Toast'
import './XMobile.css'

function PostActionIcon({
  src,
  variant,
  nodeId,
  groupNodeId,
}: {
  src: string
  variant: 'reply' | 'repost' | 'like' | 'views'
  nodeId: string
  groupNodeId: string
}) {
  return (
    <div className="x-mobile__action-icon" data-node-id={nodeId} data-name="SVG">
      <div
        className={`x-mobile__action-icon-inner x-mobile__action-icon-inner--${variant}`}
        data-node-id={groupNodeId}
        data-name="Group"
      >
        <img src={src} alt="" />
      </div>
    </div>
  )
}

function ProfilePhoto({ className }: { className?: string }) {
  return (
    <div className={className}>
      <img src="/assets/profile-photo.png" alt="" />
    </div>
  )
}

export default function XMobile() {
  const [isRetweeted, setIsRetweeted] = useState(false)
  const [retweetCount, setRetweetCount] = useState(33)
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(125)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [toast, setToast] = useState<ToastType | null>(null)
  const toastTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const showToast = (type: ToastType) => {
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current)
    }
    setToast(type)
    toastTimeoutRef.current = setTimeout(() => {
      setToast(null)
      toastTimeoutRef.current = null
    }, 3200)
  }

  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current)
      }
    }
  }, [])

  const removeBookmarkWithToast = () => {
    setIsBookmarked((bookmarked) => {
      if (bookmarked) {
        showToast('removed')
        return false
      }
      return bookmarked
    })
  }

  const maybeRemoveBookmark = (nextIsLiked: boolean, nextIsRetweeted: boolean) => {
    if (!nextIsLiked && !nextIsRetweeted) {
      removeBookmarkWithToast()
    }
  }

  const toggleRetweet = () => {
    if (isRetweeted) {
      setRetweetCount((count) => count - 1)
      setIsRetweeted(false)
      maybeRemoveBookmark(isLiked, false)
      return
    }

    setRetweetCount((count) => count + 1)
    setIsRetweeted(true)
  }

  const toggleLike = () => {
    if (isLiked) {
      setLikeCount((count) => count - 1)
      setIsLiked(false)
      maybeRemoveBookmark(false, isRetweeted)
      return
    }

    setLikeCount((count) => count + 1)
    setIsLiked(true)
  }

  const toggleBookmark = () => {
    if (isBookmarked) {
      setIsBookmarked(false)
      return
    }

    if (!isRetweeted && !isLiked) {
      showToast('require-like-retweet')
      return
    }

    setIsBookmarked(true)
    showToast('added')
  }

  return (
    <div className="x-mobile" data-node-id="4343:17288" data-name="X_Mobile">
      {toast && <Toast type={toast} />}
      <div className="x-mobile__cover" data-node-id="4343:17289" data-name="Caver">
        <div className="x-mobile__cover-image" data-node-id="4343:17290" data-name="1080x360">
          <img src="/assets/cover.png" alt="" />
        </div>
        <ProfilePhoto className="x-mobile__profile-photo" />
      </div>

      <div className="x-mobile__actions" data-node-id="4343:17292" data-name="Actions_Panel">
        <button type="button" className="x-mobile__icon-button" aria-label="More">
          <div className="x-mobile__dots-icon" data-node-id="4347:1590" data-name="20 / More">
            <div className="x-mobile__dots-icon-vector" data-name="Vector">
              <img src="/assets/icon-more.svg" alt="" />
            </div>
          </div>
        </button>
        <button type="button" className="x-mobile__icon-button" aria-label="Messages">
          <img src="/assets/icon-messages.svg" alt="" />
        </button>
        <button type="button" className="x-mobile__follow-button">
          Follow
        </button>
      </div>

      <div className="x-mobile__name-section" data-node-id="4343:17296" data-name="Name">
        <div className="x-mobile__user" data-node-id="4343:17297" data-name="User">
          <div className="x-mobile__name-col" data-node-id="4343:17298" data-name="Name and UserName">
            <div className="x-mobile__display-name-row" data-node-id="4343:17299" data-name="Name">
              <span className="x-mobile__display-name" data-node-id="4343:17300">
                samuelayo
              </span>
              <span className="x-mobile__verified" data-node-id="4343:17301" data-name="20 / VerifiedAccount">
                <img src="/assets/icon-verified.svg" alt="" />
              </span>
            </div>
            <p className="x-mobile__handle" data-node-id="4343:17302">
              @SamuelAyo__
            </p>
            <div className="x-mobile__automated-row" data-node-id="4343:17303">
              <span className="x-mobile__bot-icon" data-node-id="4343:17304">
                <img src="/assets/icon-bot.svg" alt="" />
              </span>
              <p className="x-mobile__automated-text" data-node-id="4343:17308">
                Automated by <a href="#">@samuelayo_xo</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="x-mobile__description" data-node-id="4343:17309" data-name="Description">
        <p data-node-id="4343:17310">Designer</p>
      </div>

      <div className="x-mobile__user-info" data-node-id="4343:17311" data-name="UserInfo">
        <div className="x-mobile__meta-item" data-node-id="4343:17312" data-name="UserProfessionalCategory">
          <img src="/assets/icon-category.svg" alt="" />
          <span data-node-id="4343:17314">Science &amp; Technology</span>
        </div>
        <div className="x-mobile__meta-item x-mobile__meta-item--location" data-node-id="4343:17315" data-name="UserLocation">
          <div className="x-mobile__meta-icon x-mobile__meta-icon--location" data-node-id="4343:17316" data-name="20 / UserLocation">
            <div className="x-mobile__meta-icon-vector" data-node-id="I4343:17316;30:161" data-name="Vector">
              <img src="/assets/icon-location.svg" alt="" />
            </div>
          </div>
          <p data-node-id="4343:17317">Know where</p>
        </div>
        <div className="x-mobile__meta-item x-mobile__meta-item--link" data-node-id="4343:17318" data-name="UserLink">
          <img src="/assets/icon-link.svg" alt="" />
          <span data-node-id="4343:17320">layers.to/samuelayo</span>
        </div>
        <div className="x-mobile__meta-item" data-node-id="4343:17321" data-name="UserJoinDate">
          <img src="/assets/icon-calendar.svg" alt="" />
          <span data-node-id="4343:17323">Joined October 2019</span>
        </div>
      </div>

      <div className="x-mobile__follow-stats" data-node-id="4343:17324" data-name="Folow">
        <div className="x-mobile__stat" data-node-id="4343:17325" data-name="Following">
          <span className="x-mobile__stat-count" data-node-id="4343:17326">635</span>
          <span className="x-mobile__stat-label" data-node-id="4343:17327">Following</span>
        </div>
        <div className="x-mobile__stat" data-node-id="4343:17328" data-name="Following">
          <span className="x-mobile__stat-count" data-node-id="4343:17329">1,057</span>
          <a
            className="x-mobile__stat-label"
            href="https://twitter.com/sneprokin/verified_followers"
            data-node-id="4343:17330"
          >
            Followers
          </a>
        </div>
      </div>

      <div className="x-mobile__posts" data-node-id="4343:17331" data-name="Posts">
        <div className="x-mobile__tabs" data-node-id="4343:17332" data-name="Tabs">
          <div className="x-mobile__tab x-mobile__tab--active" data-node-id="4343:17333" data-name="Tabs">
            <span className="x-mobile__tab-label">Posts</span>
            <div className="x-mobile__tab-indicator" />
          </div>
          <div className="x-mobile__tab" data-node-id="4343:17334" data-name="Tabs">
            <span className="x-mobile__tab-label">Replies</span>
            <div className="x-mobile__tab-indicator" />
          </div>
          <div className="x-mobile__tab" data-node-id="4343:17335" data-name="Component 2">
            <span className="x-mobile__tab-label">Highlights</span>
            <div className="x-mobile__tab-indicator" />
          </div>
          <div className="x-mobile__tab" data-node-id="4343:17336" data-name="Component 3">
            <span className="x-mobile__tab-label">Media</span>
            <div className="x-mobile__tab-indicator" />
          </div>
        </div>

        <div className="x-mobile__feed" data-node-id="4343:17337" data-name="Posts">
          <article className="x-mobile__post" data-node-id="4343:17341" data-name="Post">
            <div className="x-mobile__post-avatar" data-node-id="4343:17342" data-name="Opens profile photo">
              <img src="/assets/profile-photo.png" alt="" />
            </div>

            <div className="x-mobile__post-body" data-node-id="4343:17343" data-name="Name and UserName">
              <div className="x-mobile__post-top" data-node-id="4343:17344" data-name="Top">
                <div className="x-mobile__post-header" data-node-id="4343:17345" data-name="Name">
                  <div className="x-mobile__post-name-row" data-node-id="4343:17346" data-name="Name">
                    <span className="x-mobile__post-name" data-node-id="4343:17347">samuelayo</span>
                    <span className="x-mobile__verified" data-node-id="4343:17348" data-name="20 / VerifiedAccount">
                      <img src="/assets/icon-verified.svg" alt="" />
                    </span>
                  </div>
                  <p className="x-mobile__post-meta" data-node-id="4343:17349">
                    samuelAyo__· Nov 20
                  </p>
                  <div className="x-mobile__post-more x-mobile__dots-icon" data-node-id="4343:17350" data-name="20 / More">
                    <div className="x-mobile__dots-icon-vector" data-node-id="I4343:17350;21:426" data-name="Vector">
                      <img src="/assets/icon-more-post.svg" alt="" />
                    </div>
                  </div>
                </div>

                <div className="x-mobile__post-automated" data-node-id="4343:17351">
                  <span className="x-mobile__bot-icon" data-node-id="4343:17352">
                    <img src="/assets/icon-bot.svg" alt="" />
                  </span>
                  <p className="x-mobile__post-automated-text" data-node-id="4343:17356">
                    Automated by <a href="#">@samuelayo_xo</a>
                  </p>
                </div>

                <p className="x-mobile__post-text" data-node-id="4343:17357">
                  working on some sort of exploration
                </p>
              </div>

              <div className="x-mobile__post-image" data-node-id="4343:17380" data-name="Image">
                <img src="/assets/post-image.png" alt="" />
              </div>

              <div className="x-mobile__post-actions" data-node-id="4343:17383" data-name="Container">
                <div
                  className="x-mobile__action-bar"
                  data-node-id="4343:17384"
                  data-name="Group - 2 reposts, Reposted, 5 likes, Liked, 107 views"
                >
                  <div className="x-mobile__action-item" data-node-id="4343:17385">
                    <div className="x-mobile__action-button" data-node-id="4343:17386">
                      <div className="x-mobile__action-inner" data-node-id="4343:17387">
                        <PostActionIcon
                          src="/assets/icon-reply.svg"
                          variant="reply"
                          nodeId="4343:17389"
                          groupNodeId="4343:17390"
                        />
                        <div className="x-mobile__action-spacer" data-node-id="4343:17392" aria-hidden="true" />
                      </div>
                    </div>
                  </div>

                  <div className="x-mobile__action-item" data-node-id="4343:17394">
                    <button
                      type="button"
                      className="x-mobile__action-button x-mobile__action-toggle"
                      data-node-id="4343:17395"
                      aria-pressed={isRetweeted}
                      aria-label={isRetweeted ? 'Undo repost' : 'Repost'}
                      onClick={toggleRetweet}
                    >
                      <div className="x-mobile__action-inner" data-node-id="4343:17396">
                        <PostActionIcon
                          src={isRetweeted ? '/assets/icon-repost.svg' : '/assets/icon-repost-inactive.svg'}
                          variant="repost"
                          nodeId="4343:17398"
                          groupNodeId="4343:17399"
                        />
                        <span
                          className={`x-mobile__action-count ${isRetweeted ? 'x-mobile__action-count--retweet' : 'x-mobile__action-count--muted'}`}
                          data-node-id="4343:17403"
                        >
                          {retweetCount}
                        </span>
                      </div>
                    </button>
                  </div>

                  <div className="x-mobile__action-item" data-node-id="4343:17404">
                    <button
                      type="button"
                      className="x-mobile__action-button x-mobile__action-toggle"
                      data-node-id="4343:17405"
                      aria-pressed={isLiked}
                      aria-label={isLiked ? 'Unlike' : 'Like'}
                      onClick={toggleLike}
                    >
                      <div className="x-mobile__action-inner" data-node-id="4343:17406">
                        <PostActionIcon
                          src={isLiked ? '/assets/icon-like-active.svg' : '/assets/icon-like.svg'}
                          variant="like"
                          nodeId="4343:17408"
                          groupNodeId="4343:17409"
                        />
                        <span
                          className={`x-mobile__action-count ${isLiked ? 'x-mobile__action-count--liked' : 'x-mobile__action-count--muted'}`}
                          data-node-id="4343:17413"
                        >
                          {likeCount}
                        </span>
                      </div>
                    </button>
                  </div>

                  <div className="x-mobile__action-item" data-node-id="4343:17414">
                    <div className="x-mobile__action-button" data-node-id="4343:17415">
                      <div className="x-mobile__action-inner" data-node-id="4343:17416">
                        <PostActionIcon
                          src="/assets/icon-views.svg"
                          variant="views"
                          nodeId="4343:17418"
                          groupNodeId="4343:17419"
                        />
                        <span className="x-mobile__action-count x-mobile__action-count--muted" data-node-id="4343:17423">
                          107
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="x-mobile__action-bookmark" data-node-id="4343:17424">
                    <button
                      type="button"
                      className="x-mobile__action-toggle x-mobile__action-bookmark-button"
                      aria-pressed={isBookmarked}
                      aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark'}
                      onClick={toggleBookmark}
                    >
                      <div
                        className="x-mobile__action-bookmark-icon"
                        data-node-id={isBookmarked ? '4345:17475' : '4345:17472'}
                        data-name="Frame"
                      >
                        <img
                          src={isBookmarked ? '/assets/icon-bookmark-active.svg' : '/assets/icon-bookmark.svg'}
                          alt=""
                        />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}
