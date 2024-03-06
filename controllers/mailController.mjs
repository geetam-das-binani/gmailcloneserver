import EmailModel from "../model/emailModel.mjs";


// ! Save email to database
export const saveSentEmail = async (req, res) => {
  try {
    const email = await EmailModel.create(req.body);
    res.status(201).json({
      success: 'Email Saved Successfully',
      data: email,
    })
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
