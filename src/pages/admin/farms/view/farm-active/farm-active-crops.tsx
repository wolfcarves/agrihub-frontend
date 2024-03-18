import { Button } from "@components/ui/button";
import { Card } from "@components/ui/card";
import React from "react";

const FarmActiveCrops = () => {
  return (
    <div>
      <h2 className="text-xl font-bold tracking-tight">Community Crops:</h2>
      <div className="flex gap-4 flex-wrap">
        <Card className="flex gap-4 p-5 w-full sm:w-[30%] bg-main ">
          <div>
            <img
              src="https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="aspect-square object-cover h-32 rounded-lg"
            />
          </div>
          <div>
            <h4>Tomato</h4>
            <h5>Planted:50</h5>
            <h5>Harvested:560</h5>
            <h5>Withered:25</h5>
            <Button variant="outline">images</Button>
          </div>
        </Card>
        <Card className="flex gap-4 p-5 w-full sm:w-[30%] bg-main ">
          <div>
            <img
              src="https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="aspect-square object-cover h-32 rounded-lg"
            />
          </div>
          <div>
            <h4>Tomato</h4>
            <h5>Planted:50</h5>
            <h5>Harvested:560</h5>
            <h5>Withered:25</h5>
            <Button variant="outline">images</Button>
          </div>
        </Card>
        <Card className="flex gap-4 p-5 w-full sm:w-[30%] bg-main ">
          <div>
            <img
              src="https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="aspect-square object-cover h-32 rounded-lg"
            />
          </div>
          <div>
            <h4>Tomato</h4>
            <h5>Planted:50</h5>
            <h5>Harvested:560</h5>
            <h5>Withered:25</h5>
            <Button variant="outline">images</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FarmActiveCrops;
