import zlib

raw_str = """r#Grw~E {'pC B3/. FGt#/ ]o!o ]yo] Jo7>a C6:b) B"l# eQ$1*^Z @!*-S 2pV^ cp,b dk5: o'eC GfV_ <[IC >Cgs fa'F lcmsH ]0)} Pv&% Fw{N=. rQ3C MOq] Lre  V%usB ~i>[V\\Mj6e Ew$e[f Z}Q=, bLRu %X7:> VP|?6 v{=7 L^p` +nt5 JeQf :<VW vSc/o MWB=OF T$o? T7!tOB YeO-n W_>| 7_=f0 Cpi< B_$aX `jzB =_'9 V&\\c `'m! 8:!V ur&= V5VQP X6LtJ fWsk2+qs /MfW-+ /Mnm \\&kA !j-! 0Od-;i" /lQ# iG+m Rsy>- /nwV 0SlC Lvw: t:f[ 5qO1 G`I" .''U {/Ud kg?k5 d{)$ 6;>Q #G4t "7LU tx}ii"""

for encoding in ['latin1', 'utf-8', 'cp1252']:
    try:
        raw = raw_str.encode(encoding, errors='ignore')
        for wbits in [-15, 15, 31, 47]:
            try:
                res = zlib.decompress(raw, wbits)
                print(f"Success with {encoding}, wbits={wbits}: {len(res)} bytes")
                print(res[:500].decode('utf-8', errors='ignore'))
                break
            except:
                pass
    except Exception as e:
        print(e)
print("Done attempt.")
