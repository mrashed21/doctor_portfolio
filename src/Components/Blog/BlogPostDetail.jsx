import Container from "../Container/Container";
import PostContent from "./PostContent";
import PostSidebar from "./PostSidebar";

const BlogPostDetail = () => {
  return (
    <section className="py-16 bg-white px-5">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <PostContent />
          </div>

          <div className="lg:col-span-4">
            <PostSidebar />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BlogPostDetail;
