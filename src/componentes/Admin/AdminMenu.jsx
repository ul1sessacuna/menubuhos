import { useEffect, useState } from "react";
import { db } from "../../FirebaseConfig";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";

export default function AdminMenu() {
    const [tragos, setTragos] = useState([]);
    const [nuevoTrago, setNuevoTrago] = useState("");

    const cargarTragos = async () => {
        const querySnapshot = await getDocs(collection(db, "tragos"));
        const lista = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setTragos(lista);
    };

    useEffect(() => {
        cargarTragos();
    }, []);

    const agregarTrago = async () => {
        if (nuevoTrago.trim() === "") return;
        await addDoc(collection(db, "tragos"), { nombre: nuevoTrago });
        setNuevoTrago("");
        cargarTragos();
    };

    const eliminarTrago = async (id) => {
        await deleteDoc(doc(db, "tragos", id));
        cargarTragos();
    };

    return (
        <div>
            <h2>Panel de Administración</h2>
            <input value={nuevoTrago} onChange={(e) => setNuevoTrago(e.target.value)} placeholder="Nuevo trago" />
            <button onClick={agregarTrago}>Agregar</button>
            <ul>
                {tragos.map((trago) => (
                    <li key={trago.id}>
                        {trago.nombre}
                        <button onClick={() => eliminarTrago(trago.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
