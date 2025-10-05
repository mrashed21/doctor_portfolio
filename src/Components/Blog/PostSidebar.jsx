import { FeedsWidget, FollowUsWidget, SearchWidget } from "./SidebarWidgets";

const PostSidebar = () => {
  return (
    <div className="space-y-10 sticky top-10 overflow-hidden">
      <SearchWidget data-aos="fade-left" data-aos-delay="100" />
      <FollowUsWidget data-aos="fade-left" data-aos-delay="200" />
      <FeedsWidget data-aos="fade-left" data-aos-delay="300" />
    </div>
  );
};

export default PostSidebar;
