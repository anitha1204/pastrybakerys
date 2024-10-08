import React from 'react';

const CourseCurriculum = () => {
  const curriculumItems = [
    ["Sponges & tea cakes", "Fondant decoration", "Chocolates & Bonbons", "Entremets"],
    ["Hot & Cold Desserts", "Custards, Creams & Pralines", "French Macarons", "Verrines"],
    ["Classic cakes & sponges", "Tarts & Pies", "Creameux & Mousses", "Choux Pastry"],
    ["Hot & Cold Desserts", "Puff Pastry", "Icings, Glazes & Sauces", "Yeast breads & Rolls"],
    ["Butter Cream Icing", "Enriched & Artisanal Bread", "Wedding Cakes", "Biscuits"]
  ];

  return (
    <>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-butler text-primary mb-4 md:mb-6 text-center mt-8 ">What we teach for 2 months</h2>
      <div className="max-w-[90%] mx-auto p-12 bg-gray-100 rounded-[50px] shadow-md">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
          {curriculumItems.map((row, rowIndex) => (
            row.map((item, colIndex) => (
              <div key={`${rowIndex}-${colIndex}`} className="font-nunito rounded-lg ml-7 lg:text-[21px]">
                {item}
              </div>
            ))
          ))}
        </div>

        <div className="border border-gray-400 mb-10"></div>

       <div className="text-center lg:text-xl text-gray-600">
          <p className="font-nunito">Study materials & notes | Journals, Recipe notes & Ingredients, Chef coat, apron & caps</p>
        </div>
      </div>
    </>
  );
};

export default CourseCurriculum;
