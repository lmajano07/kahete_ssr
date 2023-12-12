import customers from "../models/customer.model.js";

export const getCustomerBySlug = (req, res) => {
  const { slug } = req.params;

  if (!slug) {
    return res.status(401).send({ status: "Error", message: "Missing slug" });
  }

  const customer = customers.find((item) => item.slug === slug);

  if (!customer) res.status(400).send({ status: "failed", error: "Not found" });

  return res.status(200).render("customer", { customer });
};
