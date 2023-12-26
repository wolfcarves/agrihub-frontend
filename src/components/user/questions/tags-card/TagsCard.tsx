import React from 'react';

const TagsCard = () => {
  const mockData = [
    {
      title: "Title 1",
      description: "Long description texription texription texription texription texription texription texription texription texription texription texription texription texription texription texription text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida nunc sed libero lacinia, ut fermentum ipsum ultrices adsadsadsadsad."
    },
    {
      title: "Title 2",
      description: "Short description text"
    },
    {
      title: "Title 3",
      description: "Another short description"
    },
    {
      title: "Title 4",
      description: "Yet another short description sfsadsad sdasdasd asdasdasdas asdasd sad asdsa sadsa dasdasd asd aasdsa sad asdsad sad sad "
    },
    {
        title: "Title 5",
        description: "Yet another short description sfsadsad sdasdasd asdasdasdas asdasd sad asdsa sadsa dasdasd asd aasdsa sad asdsad sad sad "
      },
      {
        title: "Title 6",
        description: "Yet another short description sfsadsad sdasdasd asdasdasdas asdasd sad asdsa sadsa dasdasd asd aasdsa sad asdsad sad sad "
      },
      {
        title: "Title 7",
        description: "Yet a"
      },
      {
        title: "Title 1",
        description: "Long description texription texription texription texription texription texription texription texription texription texription texription texription texription texription texription text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida nunc sed libero lacinia, ut fermentum ipsum ultrices adsadsadsadsad."
      },
  ];

  return (
    <div className="grid grid-cols-3 gap-3 mt-8">
      {mockData.map((data, index) => (
        <div key={index} className="flex flex-col border-2 border-gray-500 rounded-lg h-full">
          <div className="flex-shrink-0 p-2"></div>
          <div className="flex flex-col flex-grow h-full">
            <h2 className="text-xl font-bold truncate p-2">{data.title}</h2>
            <h4 className="text-md text-gray-600 overflow-hidden p-2" style={{
              display: '-webkit-box',
              WebkitLineClamp: 5,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}>
              {data.description}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TagsCard;
