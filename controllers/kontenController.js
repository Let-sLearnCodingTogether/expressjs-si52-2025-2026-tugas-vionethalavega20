import kontenModel from "../model/kontenModel.js";

export const listKonten = async (req, res) => {
    try {
        const data = await kontenModel.find({});
        
        res.status(200).json({
            message: "List Ide Konten Media Sosial",
            data: data,
        });
    }catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
};

export const createNewKonten = async (req, res) => {
    try {
        const request = req.body;
        console.log(request);

        const response = await kontenModel.create({
            platform: request.platform,
            idea: request.idea,
            postDate: request.postDate,
        });

        res.status(201).json({
            message: "Data ide konten media sosial berhasil dibuat",
            data: response,
        });
    }catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
};

export const updateKonten = async (req, res) => {
    try {
        const id = req.params.id;
        const request = req.body;

    if (!id) {
        return res.status(400).json({
            message: "ID wajib diisi",
            data: null,
        });
    }

    const response = await kontenModel.findByIdAndUpdate(id, {
        platform: request.platform,
        idea: request.idea,
        postDate: request.postDate,
    });

    if (!response) {
        return res.status(404).json({
            message: "Data ide konten media sosial tidak ditemukan",
            data: null,
        });
    }

    res.status(200).json({
        message: "Data ide konten media sosial berhasil diupdate",
        data: response,
    });

    }catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
};

export const deleteKonten = async (req, res) => {
    try {
        const id = req.params.id;

    if (!id) {
        return res.status(400).json({
            message: "ID wajib diisi",
            data: null,
        });
    }

    const response = await kontenModel.findByIdAndDelete(id);

    if (response) {
        return res.status(200).json({
            message: "Data ide konten media sosial berhasil dihapus",
            data: response,
        });
    }

    res.status(404).json({
        message: "Data ide konten media sosial tidak ditemukan",
        data: null,
    });
    }catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
};