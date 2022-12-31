export const userColumns = [
  { field: "_id", headerName: "ID", width: 100 },
  {
    field: "user",
    headerName: "USER",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src={
              params.row.img ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF6mVep8mmwTbVD9A6_0tAkjhiPOUikhenZnH3NGEImOX4eW2pbXJ8E-WmJcWXjcXY-bA&usqp=CAU"
            }
            alt="text"
          />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 180,
  },

  {
    field: "country",
    headerName: "Country",
    width: 100,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 100,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.phone}`}>
          {params.row.phone}
        </div>
      );
    },
  },
];

export const hotelColumns = [
  { field: "_id", headerName: "ID", width: 150 },
  {
    field: "name",
    headerName: "Name",
    width: 230,
  },
  {
    field: "type",
    headerName: "Type",
    width: 200,
  },
  {
    field: "title",
    headerName: "Title",
    width: 100,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
];

export const roomColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 200,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "maxPerson",
    headerName: "Max Person",
    width: 100,
  },
];
