import { Container, Navbar } from "src/components";

export default function MainLayout(props) {
  return (
    <Container>
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="min-w-0 w-full flex-auto lg:static lg:max-h-full lg:overflow-visible">
          <div className="mx-8 py-8">{props.children}</div>
          <div className="border-t px-8 py-5">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500">
                Palestinian Social Fund © Non-profit registered in Canada
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
