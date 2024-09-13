import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

const PaginationComponent = ({
  productsPerPage,
  totalProducts,
  paginate,
  currentPage,
}) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div>
      <Pagination>
        <PaginationContent>
          {pageNumber.map((number) => (
            <PaginationItem
              className={`border border-gray-300 ${
                currentPage === number ? "bg-slate-700 text-white" : ""
              }`}
              onClick={() => paginate(number)}
              key={number}
            >
              <PaginationLink
                className="hover:bg-slate-700 hover:text-white border-none rounded-none"
                href="#"
              >
                {number}
              </PaginationLink>
            </PaginationItem>
          ))}
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PaginationComponent;
