import { Button } from "@components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "@components/ui/input";

const AdminLoginForm = () => {
  return (
    <Tabs defaultValue="super-admin" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2 bg-neutral-200/50">
        <TabsTrigger value="super-admin">Super Admin</TabsTrigger>
        <TabsTrigger value="admin">Admin</TabsTrigger>
      </TabsList>
      <TabsContent value="super-admin">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Login to Agrihub as Super Admin</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label>Email</Label>
              <Input id="email" />
            </div>
            <div className="space-y-1">
              <Label>Password</Label>
              <Input id="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Login</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="admin">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Login to Agrihub as Admin</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label>Email</Label>
              <Input id="email" type="email" />
            </div>
            <div className="space-y-1">
              <Label>Password</Label>
              <Input id="password" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Login</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default AdminLoginForm;
