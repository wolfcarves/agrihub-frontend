const TARGET_ROLES = ["farm_head", "subfarm_head", "asst_admin"];

const useParseUserRole = (role?: string) => {
  const parsedRole = TARGET_ROLES[TARGET_ROLES.indexOf(role ?? "")];

  if (parsedRole === undefined && role)
    return role.charAt(0).toUpperCase() + role?.slice(1);

  const f = parsedRole ? parsedRole.split("_")[0] : null;
  const first = f ? f.charAt(0).toUpperCase() + f?.slice(1) : "";
  const s = parsedRole ? parsedRole.split("_")[1] : null;
  const second = s ? s.charAt(0).toUpperCase() + s?.slice(1) : "";

  return (
    <>
      {first} {second}
    </>
  );
};

export default useParseUserRole;
